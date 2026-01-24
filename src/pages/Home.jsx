import Hero from '../components/Hero';
import Details from '../components/Details';
import Gallery from '../components/Gallery';
import StaticSection from '../components/StaticSection';
import { galleryConfig } from '../galleryData';

const Home = () => {
    return (
        <main>
            <Hero />
            <Details />
            <StaticSection
                image={galleryConfig.staticImage}
                title="Unparalleled Elegance"
                subtitle="Interior Gallery"
            />
            <Gallery />

            {/* Simple Footer for now */}
            <footer style={{
                padding: 'var(--spacing-lg) 0',
                textAlign: 'center',
                borderTop: '1px solid var(--color-border)',
                marginTop: 'var(--spacing-xl)',
                color: 'var(--color-text-light)'
            }}>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Lobello Drive. All Rights Reserved.</p>
                </div>
            </footer>
        </main>
    );
};

export default Home;
