import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function SiteLayout({ children }) {
    return (
        <>
            <div className='flex flex-col h-screen'>
                <Header />
                <main className='flex-1'>
                    <article>{children}</article>
                </main>
                <Footer className='mt-auto'/>
            </div>
        </>
    );
}
