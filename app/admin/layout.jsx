import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "shopNOW. - Admin",
    description: "shopNOW. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
