import SiteLayout from '@/layouts/site-layout';
import HomeFeatured from '@/components/HomeFeatured';

export default function Welcome() {
    return (
        <>
            <SiteLayout>
                <HomeFeatured />
            </SiteLayout>
        </>
    );
}
