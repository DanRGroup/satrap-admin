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
  TasksTypeModel,
  WorkshopStatusModel,
  SiteModel,
  ContractModel,
  VehicleModel,
} from 'models';

const NotFound = Loadable(lazy(() => import('screens/Authentication/Page404')));

const FixedOrder = Loadable(lazy(() => import('screens/SuperAdminRole/FixedOrder')));
const NewOrderScreen = Loadable(lazy(() => import('screens/SuperAdminRole/NewOrder')));
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

export const navConfig = [
  {
    path: '/',
    element: <Navigate to="/app" replace />,
  },
  { path: '/orders', element: <Navigate to="/orders/list" replace /> },
  {
    path: '/',
    url: '/',
    title: 'setting',
    inSidebar: true,
    element: <AppLayout />,
    icon: <DashboardRoundedIcon fontSize="small" />,
    children: [
      { element: <Navigate to="/app" replace /> },
      {
        path: '/app',
        url: '/app',
        title: 'app',
        element: <Dashboard />,
        inSidebar: true,
      },
      {
        path: '/contract-types',
        url: '/contract-types',
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
        path: '/material_types',
        url: '/material_types',
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
        path: '/operation-types',
        url: '/operation-types',
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
        path: '/shift-types',
        url: '/shift-types',
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
        path: '/site-types',
        url: '/site-types',
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
        path: '/task-status',
        url: '/task-status',
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
        path: '/task-types',
        url: '/task-types',
        title: 'task_types',
        element: (
          <Page title="Tasks">
            <TasksTypeModel />
          </Page>
        ),
        inSidebar: true,
        roles: ['superadmin'],
      },
      {
        path: '/workshop-status',
        url: '/workshop-status',
        title: 'workshop_status',
        element: (
          <Page title="WorkShop">
            <WorkshopStatusModel />
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
        path: '/dashboard/sites',
        url: '/dashboard/sites',
        title: 'sites',
        element: (
          <Page title="Orders">
            <SiteModel />
          </Page>
        ),
        inSidebar: true,
      },
      {
        path: '/dashboard/contracts',
        url: '/dashboard/contracts',
        title: 'contracts',
        element: (
          <Page title="Orders">
            <ContractModel />
          </Page>
        ),
        inSidebar: true,
      },
      {
        path: '/dashboard/vehicles',
        url: '/dashboard/vehicles',
        title: 'vehicles',
        element: (
          <Page title="Orders">
            <VehicleModel />
          </Page>
        ),
        inSidebar: true,
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
