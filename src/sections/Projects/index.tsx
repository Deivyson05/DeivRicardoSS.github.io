import styles from "./styles.module.css";

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import projCombogoImg from "../../assets/proj-combogo.png";
import projShlomoImg from "../../assets/proj-shlomo.png";
import projPlayerdemusicaImg from "../../assets/proj-playerdemusica.png";

import projTekoImg from "../../assets/proj-teko.png";
import projPhyeduImg from "../../assets/proj-phyedu.png";

import projJogodamemoriaImg from "../../assets/proj-jogodamemoria.png";
import projPianovirtualImg from "../../assets/proj-pianovirtual.png";
import projJogodavelhaImg from "../../assets/proj-jogodavelha.png";

import useWindowSize from "../../components/useWindowSize";



export function Projects() {
    const navigate = useNavigate();
    const { width } = useWindowSize();
    return (
        <section className={styles.container} id="projects">
            <h2>Projetos</h2>
            <div className={styles.swiper}>
                <h3>Envolvendo Código</h3>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination
                    style={{ width: '100%', height: '' }}
                    spaceBetween={0}
                    slidesPerView={width >= 900? 3 : (width <= 580? 1 : 2) }
                >
                    <SwiperSlide>
                        <article onClick={() => navigate("/details/combogo-unicap")}>
                            <img src={projCombogoImg} alt="Projeto" />
                            <h4>LandingPage Combogó</h4>
                            <p>LandingPage de apresentação da Combogó</p>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article onClick={() => navigate("/details/guia-de-leitura")}>
                            <img src={projShlomoImg} alt="Projeto" />
                            <h4>Shlomo</h4>
                            <p>Aplicativo para gerenciamento de leitura</p>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article onClick={() => navigate("/details/player_de_musica_basico")}>
                            <img src={projPlayerdemusicaImg} alt="Projeto" />
                            <h4>Player de música básico</h4>
                            <p>Player de música simples feito com JavaScript</p>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article onClick={() => navigate("/details/adotai")}>
                            <img src="https://placehold.co/600x400" alt="Projeto" />
                            <h4>Adotaí</h4>
                            <p>Aplictivo de match para pets</p>
                        </article>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className={styles.swiper}>
                <h3>Ideações</h3>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination
                    style={{ width: '100%', height: '' }}
                    spaceBetween={0}
                    slidesPerView={width >= 900? 3 : (width <= 580? 1 : 2) }
                >
                    <SwiperSlide>
                        <article onClick={() => navigate("/details/teko")}>
                            <img src={projTekoImg} alt="Projeto" />
                            <h4>Teko</h4>
                            <p>Ideação de plataforma de jogos culturais</p>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article onClick={() => navigate("/details/phyedu")}>
                            <img src={projPhyeduImg} alt="Projeto" />
                            <h4>PhyEdu</h4>
                            <p>Ideação de plataforma de ensino</p>
                        </article>
                    </SwiperSlide>
                    
                </Swiper>
            </div>

            <div className={styles.swiper}>
                <h3>Jogos</h3>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination
                    style={{ width: '100%', height: '' }}
                    spaceBetween={0}
                    slidesPerView={width >= 900? 3 : (width <= 580? 1 : 2) }
                >
                    <SwiperSlide>
                        <article onClick={() => navigate("/details/cinconoches")}>
                            <img src="https://placehold.co/600x400" alt="Projeto" />
                            <h4>Cinco Noches Con Alfredo</h4>
                            <p>Fangame de Fnaf feito com JavaScript</p>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article onClick={() => navigate("/details/jogoDaMemoria")}>
                            <img src={projJogodamemoriaImg} alt="Projeto" />
                            <h4>Jogo da memória</h4>
                            <p>Jodo de memória feito com JavaScript</p>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article onClick={() => navigate("/details/pianoVirtual")}>
                            <img src={projPianovirtualImg} alt="Projeto" />
                            <h4>Piano virtual</h4>
                            <p>Piano virtual feito com JavaScript</p>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article onClick={() => navigate("/details/tic-tac-toe_cmd-edition")}>
                            <img src={projJogodavelhaImg} alt="Projeto" />
                            <h4>Jogo da velha</h4>
                            <p>Jogo da velha simples feito com C#</p>
                        </article>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}