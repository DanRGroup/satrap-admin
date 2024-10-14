import React, { useEffect, useState } from 'react';
import PopupHandler from './PopupHandler';
import graph from './graph';

import { useSelector } from 'react-redux';
import { isEmptyObject } from 'helpers/formatObject';
import { useLazyQuery } from '@apollo/client';

export default function MainModel(props) {
  const { initFilter, isPopup = false } = props;

  const init = { ...initFilter };

  const [startFetch, setStartFetch] = useState(!isPopup);
  const [flag, setFlag] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [total, setTotal] = useState(0);
  const [report, setReport] = useState({});
  const [result, setResult] = useState([]);
  const [filter, setFilter] = useState(init);
  const { userToken } = useSelector((state) => state.auth);

  const clearFilter = () => setFilter(init);

  const handleSetFilter = (filter) => {
    setPage(1);
    setResult([]);
    if (filter?.tariff) {
      const ids = filter?.tariff;
      handleTariff(ids);
      // setFilter(tariff);
    }
    setFilter(filter);
  };

  const [getTasks, { loading }] = useLazyQuery(graph.tasks.query, {
    context: {
      serviceName: graph.tasks.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const [getTariffs, { loading: tariffsLoading }] = useLazyQuery(graph.tariffs.query, {
    context: {
      serviceName: graph.tariffs.serviceName,
      headers: {
        authorization: `Bearer ${userToken}`,
      },
    },
  });

  const refresh = () => {
    setPage(1);
    setResult([]);
    setFlag(!flag);
  };

  const handleData = async (paginate) => {
    try {
      const { data, error } = await getTasks({
        variables: {
          ...filter,
          page,
          limit,
        },
      });
      if (!isEmptyObject(data) && !error) {
        const {
          records,
          total_houre,
          total_service,
          total_shift,
          total_tonnage,
          total_cost,
          all_tonnage,
          total_cubic_meter,
        } = data[graph.tasks.name];
        setReport({
          total_houre,
          total_service,
          total_shift,
          total_tonnage,
          total_cost,
          all_tonnage,
          total_cubic_meter,
        });
        paginate ? setResult((prevData) => prevData.concat(records?.data)) : setResult(records?.data);
        setTotal(records?.total);
      }
    } catch (error) {}
  };

  const handleTariff = async (ids) => {
    try {
      const { data, error } = await getTariffs({
        variables: {
          ids,
        },
      });
      if (!isEmptyObject(data) && !error) {
        const res = data[graph.tariffs.name];
        const tariff = res?.data[0];
        setFilter((prevFilter) => ({
          ...prevFilter,
          task_type_ids: tariff?.task_type?.id,
          operation_type_ids: tariff?.operation_type?.id,
          material_type_ids: tariff?.material_type?.id,
          workshop_ids: tariff?.workshop?.id,
          site_ids: tariff?.site?.id,
        }));
        setStartFetch(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    startFetch && handleData();
  }, [startFetch, page, filter, flag]);

  return (
    <PopupHandler
      page={page}
      limit={limit}
      total={total}
      report={report}
      result={result}
      filter={filter}
      loading={loading}
      refetch={refresh}
      setPage={setPage}
      isPopup={isPopup}
      clearFilter={clearFilter}
      setFilter={handleSetFilter}
      setStartFetch={setStartFetch}
      {...props}
    />
  );
}
