import SideNav from "../ui/dashboard/sidenav";

// <Layout /> 组件会接受一个 children 特性，这个子项可以是页面或者其他布局
// 在这种情况下 /dashboard 内的其他页面会自动嵌套在 <Layout /> 组件中

// 使用 Layout 的好处是在导航时只有页面组件会更新，而 Layout 的布局不会重新呈现
// 这被称为部分渲染，这样可以提高性能
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="fles-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    )
}