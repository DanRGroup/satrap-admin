import React, { useEffect, useState } from 'react';
import PopupHandler from './PopupHandler';
import graph from './graph';

import { useSelector } from 'react-redux';
import { isEmptyObject } from 'helpers/formatObject';
import { useLazyQuery } from '@apollo/client';

export default function MainModel(props) {
  const { initFilter, isPopup = false } = props;
  const init = { max_created_at_equality: '<=', min_created_at_equality: '>=', ...initFilter };

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
    setFilter(filter);
  };

  const [getData, { loading }] = useLazyQuery(graph.list.query, {
    context: {
      serviceName: graph.list.serviceName,
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
      const { data, error } = await getData({
        variables: {
          ...filter,
          page,
          limit,
        },
      });
      if (!isEmptyObject(data) && !error) {
        const { records, total_houre, total_service, total_shift, total_tonnage, total_cost, all_tonnage } =
          data[graph.list.name];
        setReport({ total_houre, total_service, total_shift, total_tonnage, total_cost, all_tonnage });
        paginate ? setResult((prevData) => prevData.concat(records?.data)) : setResult(records?.data);
        setTotal(records?.total);
      }
    } catch (error) {}
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
