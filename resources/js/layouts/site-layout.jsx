import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function SiteLayout({ children }) {
    return (
        <>
            <div className="className={`bg-[#FCFCFC] ${inter.className}`} dark:bg-black">
                <Header />
                <main className="flex-1">
                    <article>{children}</article>
                </main>
                <Footer className="mt-auto" />
            </div>
        </>
    );
}
