import ProviderComponent from '@/components/layouts/provider-component';
import { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../styles/tailwind.css';

export const metadata: Metadata = {
    title: {
        template: '%s | Proskills39',
        default: 'Proskills39',
    },
};
const quicksand = Quicksand({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-quicksand',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={quicksand.variable}>
                <ProviderComponent>{children}</ProviderComponent>
            </body>
        </html>
    );
}
