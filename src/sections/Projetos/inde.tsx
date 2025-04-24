import styles from "./styles.module.css";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Projetos() {
    return (
        <section className={styles.container}>
            <h1>Projetos</h1>
            <div id="root"></div>
        </section>
    );
}