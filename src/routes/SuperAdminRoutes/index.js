import { lazy } from 'react';
import { AppLayout } from 'layouts';
import { useSelector } from 'react-redux';
import { hasRequiredRole } from 'helpers';
import { Loadable, Page, PrivateRoute } from 'components';
import { Navigate, Routes, Route } from 'react-router-dom';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import {
  ContractTypeModel,
  MaterialTypeModel,
  OperationTypeModel,
  ShiftTypeModel,
  SiteTypeModel,
  TaskStatusModel,
  TaskTypeModel,
  WorkshopStatusModel,
  VehicleTypeModel,
  SiteModel,
  ContractModel,
  VehicleModel,
  UserModel,
  UserStatusModel,
  WorkshopModel,
  TariffModel,
  TaskModel,
  ContractCategoryModel,
  CompanyModel,
} from 'models';

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
  return <SuperAdminDashboard />;
}

export const superAdminNavConfig = [
  {
    path: '/',
    element: <Navigate to="/setting/app" replace />,
  },
  {
    path: '/setting',
    url: '/setting',
    title: 'setting',
    inSidebar: true,
    element: <AppLayout />,
    icon: <DashboardRoundedIcon fontSize="small" />,
    roles: ['superadmin'],
    children: [
      { element: <Navigate to="/app" replace /> },
      {
        path: '/setting/app',
        url: '/setting/app',
        title: 'app',
        element: <Dashboard />,
        inSidebar: true,
        roles: ['superadmin'],
      },
      {
        path: '/setting/contract-types',
        url: '/setting/contract-types',
        title: 'contract_types',
        element: (
          <Page title="Contract">
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
          <Page title="Material">
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
          <Page title="Operations">
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
          <Page title="Actions">
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
          <Page title="Sites">
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
          <Page title="Sites">
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
          <Page title="Tasks">
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
          <Page title="Tasks">
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
          <Page title="WorkShop">
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
          <Page title="UserStatus">
            <UserStatusModel />
          </Page>
        ),
        inSidebar: true,
        roles: ['superadmin'],
      },
    ],
  },
  {
    path: '/dashboard',
    url: '/dashboard',
    title: 'dashboard',
    inSidebar: true,
    element: <AppLayout />,
    icon: <DashboardRoundedIcon fontSize="small" />,
    children: [
      {
        path: '/dashboard/managment',
        url: '/dashboard/managment',
        title: 'managment',
        element: (
          <Page title="Managment">
            <Management />
          </Page>
        ),
        inSidebar: true,
      },
      {
        path: '/dashboard/contracts',
        url: '/dashboard/contracts',
        title: 'contracts',
        element: (
          <Page title="Contracts">
            <ContractModel />
          </Page>
        ),
        inSidebar: true,
      },
      {
        path: '/dashboard/contract-categories',
        url: '/dashboard/contract-categories',
        title: 'contract-categories',
        element: (
          <Page title="ContractCategoryModel">
            <ContractCategoryModel />
          </Page>
        ),
        inSidebar: true,
      },
      {
        path: '/dashboard/task',
        url: '/dashboard/task',
        title: 'tasks',
        element: (
          <Page title="Tasks">
            <TaskModel />
          </Page>
        ),
        inSidebar: true,
      },
      {
        path: '/dashboard/tarrif',
        url: '/dashboard/tarrif',
        title: 'tariffs',
        element: (
          <Page title="Tariffs">
            <TariffModel />
          </Page>
        ),
        inSidebar: true,
      },
      {
        path: '/dashboard/sites',
        url: '/dashboard/sites',
        title: 'sites',
        element: (
          <Page title="Sites">
            <SiteModel />
          </Page>
        ),
        inSidebar: true,
      },
      {
        path: '/dashboard/vehicles',
        url: '/dashboard/vehicles',
        title: 'vehicles',
        element: (
          <Page title="Vehicles">
            <VehicleModel />
          </Page>
        ),
        inSidebar: true,
      },
      {
        path: '/dashboard/workshop',
        url: '/dashboard/workshop',
        title: 'workshops',
        element: (
          <Page title="Workshops">
            <WorkshopModel />
          </Page>
        ),
        inSidebar: true,
      },
      {
        path: '/dashboard/users',
        url: '/dashboard/users',
        title: 'users',
        element: (
          <Page title="Users">
            <UserModel />
          </Page>
        ),
        inSidebar: true,
      },
      {
        path: '/dashboard/companies',
        url: '/dashboard/companies',
        title: 'companies',
        element: (
          <Page title="Companies">
            <CompanyModel />
          </Page>
        ),
        inSidebar: true,
        roles: ['superadmin', 'companyCeo', 'companyOperator', 'companyFinancial'],
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
      {superAdminNavConfig.map((route, i) => (
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
