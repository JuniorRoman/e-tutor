import Hero from '@/components/Hero';
import HomeFeatured from '@/components/HomeFeatured';
import SiteLayout from '@/layouts/site-layout';

export default function Welcome() {
    return (
        <>
            <SiteLayout>
                <Hero />
                <HomeFeatured />
            </SiteLayout>
        </>
    );
}
