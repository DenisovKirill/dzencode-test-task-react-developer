import { Navigation, UserSettings } from '@/components';

export const SideBar = () => {
  return (
    <aside className="flex flex-col items-center w-64 min-w-64 bg-slate-50 p-4 overflow-y-auto gap-10">
      <UserSettings />
      <Navigation />
    </aside>
  );
};
