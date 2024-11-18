import { lazy } from 'react';
import { AppLayout } from 'layouts';
import { useSelector } from 'react-redux';
import { hasRequiredRole } from 'helpers';
import { Loadable, Page, PrivateRoute } from 'components';
import { Navigate, Routes, Route } from 'react-router-dom';

import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import TaskRoundedIcon from '@mui/icons-material/TaskRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import WhereToVoteRoundedIcon from '@mui/icons-material/WhereToVoteRounded';
import FireTruckRoundedIcon from '@mui/icons-material/FireTruckRounded';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import SettingsIcon from '@mui/icons-material/Settings';

import { FormattedMessage } from 'react-intl';

const ContractTypeModel = Loadable(lazy(() => import('models/ContractTypeModel')));
const MaterialTypeModel = Loadable(lazy(() => import('models/MaterialTypeModel')));
const OperationTypeModel = Loadable(lazy(() => import('models/OperationTypeModel')));
const ShiftTypeModel = Loadable(lazy(() => import('models/ShiftTypeModel')));
const SiteTypeModel = Loadable(lazy(() => import('models/SiteTypeModel')));
const TaskStatusModel = Loadable(lazy(() => import('models/TaskStatusModel')));
const TaskTypeModel = Loadable(lazy(() => import('models/TaskTypeModel')));
const WorkshopStatusModel = Loadable(lazy(() => import('models/WorkshopStatusModel')));
const VehicleTypeModel = Loadable(lazy(() => import('models/VehicleTypeModel')));
const SiteModel = Loadable(lazy(() => import('models/SiteModel')));
const ContractModel = Loadable(lazy(() => import('models/ContractModel')));
const VehicleModel = Loadable(lazy(() => import('models/VehicleModel')));
const UserModel = Loadable(lazy(() => import('models/UserModel')));
const UserStatusModel = Loadable(lazy(() => import('models/UserStatusModel')));
const WorkshopModel = Loadable(lazy(() => import('models/WorkshopModel')));
const TariffModel = Loadable(lazy(() => import('models/TariffModel')));
const TaskModel = Loadable(lazy(() => import('models/TaskModel')));
const ContractCategoryModel = Loadable(lazy(() => import('models/ContractCategoryModel')));
const CompanyModel = Loadable(lazy(() => import('models/CompanyModel')));

// import {
//   ContractTypeModel,
//   MaterialTypeModel,
//   OperationTypeModel,
//   ShiftTypeModel,
//   SiteTypeModel,
//   TaskStatusModel,
//   TaskTypeModel,
//   WorkshopStatusModel,
//   VehicleTypeModel,
//   SiteModel,
//   ContractModel,
//   VehicleModel,
//   UserModel,
//   UserStatusModel,
//   WorkshopModel,
//   TariffModel,
//   TaskModel,
//   ContractCategoryModel,
// } from 'models';

const NotFound = Loadable(lazy(() => import('screens/Authentication/Page404')));

const Management = Loadable(lazy(() => import('screens/SuperAdminRole/Management')));
const SuperAdminDashboard = Loadable(lazy(() => import('screens/SuperAdminRole/Dashboard')));

function Dashboard() {
  const { userInfo } = useSelector((state) => state.auth);
  // if (hasRequiredRole(['superadmin', 'operator'], userInfo?.roles)) {
  //   return <UnitAdminDashboard />;
  // }
  // if (hasRequiredRole(['superadmin', 'operator'], userInfo?.roles)) {
  //   return <SuperAdminDashboard />;
  // }
  return (
    <Page title="داشبورد">
      <SuperAdminDashboard />
    </Page>
  );
}

export const navConfig = [
  {
    path: '/',
    element: <Navigate to="/dashboard/managment" replace />,
  },
  // {
  //   path: '/setting/app',
  //   url: '/setting/app',
  //   title: <FormattedMessage id="app" />,
  //   element: <Dashboard />,
  //   inSidebar: true,
  //   roles: ['superadmin'],
  // },
  {
    path: '/dashboard',
    url: '/dashboard',
    title: 'dashboard',
    inSidebar: true,
    element: <AppLayout />,
    icon: <DashboardRoundedIcon fontSize="small" />,
    children: [
      {
        path: '/dashboard/app',
        url: '/dashboard/app',
        title: 'app',
        element: <Dashboard />,
        icon: <GridViewRoundedIcon fontSize="small" />,
        inSidebar: true,
        roles: ['superadmin'],
      },
      {
        path: '/dashboard/managment',
        url: '/dashboard/managment',
        title: 'managment',
        element: (
          <Page title="مدیریت">
            <Management />
          </Page>
        ),
        icon: <ManageAccountsRoundedIcon fontSize="small" />,
        inSidebar: true,
      },
      {
        path: '/dashboard/contracts',
        url: '/dashboard/contracts',
        title: 'contracts',
        element: (
          <Page title="قراردادها">
            <ContractModel />
          </Page>
        ),
        icon: <EditNoteRoundedIcon fontSize="small" />,
        inSidebar: true,
        roles: ['superadmin', 'companyCeo', 'companyOperator', 'companyFinancial'],
      },
      {
        path: '/dashboard/contract-categories',
        url: '/dashboard/contract-categories',
        title: 'contract_categories',
        element: (
          <Page title="ContractCategoryModel">
            <ContractCategoryModel />
          </Page>
        ),
        icon: <CategoryRoundedIcon fontSize="small" />,
        inSidebar: true,
        roles: ['superadmin', 'companyCeo'],
      },
      {
        path: '/dashboard/task',
        url: '/dashboard/task',
        title: 'tasks',
        element: (
          <Page title="فعالیت‌ها">
            <TaskModel />
          </Page>
        ),
        icon: <TaskRoundedIcon fontSize="small" />,
        inSidebar: true,
      },
      {
        path: '/dashboard/tarrif',
        url: '/dashboard/tarrif',
        title: 'tariffs',
        element: (
          <Page title="تعرفه‌ها">
            <TariffModel />
          </Page>
        ),
        icon: <ImportContactsRoundedIcon fontSize="small" />,
        inSidebar: true,
        roles: ['superadmin', 'companyCeo'],
      },
      {
        path: '/dashboard/sites',
        url: '/dashboard/sites',
        title: 'sites',
        element: (
          <Page title="محل‌های تخلیه">
            <SiteModel />
          </Page>
        ),
        icon: <WhereToVoteRoundedIcon fontSize="small" />,
        inSidebar: true,
        roles: ['superadmin', 'siteManager', 'companyCeo'],
      },
      {
        path: '/dashboard/vehicles',
        url: '/dashboard/vehicles',
        title: 'vehicles',
        element: (
          <Page title="ماشین‌آلات">
            <VehicleModel />
          </Page>
        ),
        icon: <FireTruckRoundedIcon fontSize="small" />,
        inSidebar: true,
      },
      {
        path: '/dashboard/workshop',
        url: '/dashboard/workshop',
        title: 'workshops',
        element: (
          <Page title="کارگاه‌ها">
            <WorkshopModel />
          </Page>
        ),
        icon: <LocationCityRoundedIcon fontSize="small" />,
        inSidebar: true,
        roles: ['superadmin', 'workshopManager', 'companyCeo'],
      },
      {
        path: '/dashboard/users',
        url: '/dashboard/users',
        title: 'users',
        element: (
          <Page title="کاربران">
            <UserModel />
          </Page>
        ),
        icon: <AccountCircleRoundedIcon fontSize="small" />,
        inSidebar: true,
        roles: ['superadmin', 'companyCeo', 'workshopManager', 'companyOperator', 'companyFinancial'],
      },
      {
        path: '/dashboard/companies',
        url: '/dashboard/companies',
        title: 'companies',
        element: (
          <Page title="شرکت‌ها">
            <CompanyModel />
          </Page>
        ),
        icon: <BusinessRoundedIcon fontSize="small" />,
        inSidebar: true,
        roles: ['superadmin', 'companyCeo', 'companyOperator', 'companyFinancial'],
      },
    ],
  },
  {
    path: '/setting',
    url: '/setting',
    title: 'setting',
    inSidebar: true,
    element: <AppLayout />,
    icon: <SettingsIcon fontSize="small" />,
    roles: ['superadmin'],
    children: [
      { element: <Navigate to="/app" replace /> },
      {
        path: '/setting/contract-types',
        url: '/setting/contract-types',
        title: 'contract_types',
        element: (
          <Page title="انواع قرارداد">
            <ContractTypeModel />
          </Page>
        ),
        inSidebar: true,
        roles: ['superadmin'],
      },
      {
        path: '/setting/material-types',
        url: '/setting/material-types',
        title: 'material_types',
        element: (
          <Page title="انواع مصالح">
            <MaterialTypeModel />
          </Page>
        ),
        inSidebar: true,
        roles: ['superadmin'],
      },
      {
        path: '/setting/operation-types',
        url: '/setting/operation-types',
        title: 'operation_types',
        element: (
          <Page title="انواع کارکرد">
            <OperationTypeModel />
          </Page>
        ),
        inSidebar: true,
        roles: ['superadmin'],
      },
      {
        path: '/setting/shift-types',
        url: '/setting/shift-types',
        title: 'shift_types',
        element: (
          <Page title="انواع شیفت">
            <ShiftTypeModel />
          </Page>
        ),
        inSidebar: true,
        roles: ['superadmin'],
      },
      {
        path: '/setting/site-types',
        url: '/setting/site-types',
        title: 'site_types',
        element: (
          <Page title="انواع محل">
            <SiteTypeModel />
          </Page>
        ),
        inSidebar: true,
        roles: ['superadmin'],
      },
      {
        path: '/setting/vehicle-types',
        url: '/setting/vehicle-types',
        title: 'vehicle_types',
        element: (
          <Page title="انواع ماشین">
            <VehicleTypeModel />
          </Page>
        ),
        inSidebar: true,
        roles: ['superadmin'],
      },
      {
        path: '/setting/task-status',
        url: '/setting/task-status',
        title: 'task_status',
        element: (
          <Page title="وضعیت‌های فعالیت">
            <TaskStatusModel />
          </Page>
        ),
        inSidebar: true,
        roles: ['superadmin'],
      },
      {
        path: '/setting/task-types',
        url: '/setting/task-types',
        title: 'task_types',
        element: (
          <Page title="انواع فعالیت">
            <TaskTypeModel />
          </Page>
        ),
        inSidebar: true,
        roles: ['superadmin'],
      },
      {
        path: '/setting/workshop-status',
        url: '/setting/workshop-status',
        title: 'workshop_status',
        element: (
          <Page title="وضعیت‌های کارگاه">
            <WorkshopStatusModel />
          </Page>
        ),
        inSidebar: true,
        roles: ['superadmin'],
      },
      {
        path: '/setting/user-status',
        url: '/setting/user-status',
        title: 'user_status',
        element: (
          <Page title="وضعیت‌های کاربران">
            <UserStatusModel />
          </Page>
        ),
        inSidebar: true,
        roles: ['superadmin'],
      },
    ],
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '404',
        element: <NotFound />,
      },
      {
        path: 'login',
        element: <Navigate to="/" />,
      },
      {
        path: 'register',
        element: <Navigate to="/" />,
      },
      {
        path: 'sign-up-otp',
        element: <Navigate to="/" />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/404" replace />,
  },
];

const Router = () => {
  return (
    <Routes>
      {navConfig.map((route, i) => (
        <Route key={i} path={route.path} element={<PrivateRoute data={route} />}>
          {route.children &&
            route.children.map((child, c) => (
              <Route key={c} path={child.path} element={<PrivateRoute data={child} />} />
            ))}
        </Route>
      ))}
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default Router;
