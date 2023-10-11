import Image_1 from "../assets/images/1.jpg";
import Image_2 from "../assets/images/2.jpg";
import Image_3 from "../assets/images/3.jpg";
import Image_4 from "../assets/images/4.jpg";
import Image_5 from "../assets/images/5.jpg";
import Image_6 from "../assets/images/6.jpg";
import Image_7 from "../assets/images/7.jpg";
import Type_1 from "../assets/images/h7-t1.jpg";
import Type_2 from "../assets/images/h7-t2.jpg";
import Type_3 from "../assets/images/h7-t3.jpg";
import Type_4 from "../assets/images/h7-t4.jpg";
import Type_5 from "../assets/images/h7-t5.png";
import Type_6 from "../assets/images/h7-t6.png";

import WOMAN_1 from "../assets/images/WOMAN_1.jpg";
import WOMAN_2 from "../assets/images/WOMAN_2.jpg";
import WOMAN_3 from "../assets/images/WOMAN_3.jpg";
import WOMAN_4 from "../assets/images/WOMAN_4.jpg";
import WOMAN_5 from "../assets/images/WOMAN_5.jpg";
import WOMAN_6 from "../assets/images/WOMAN_6.jpg";
import WOMAN_7 from "../assets/images/WOMAN_7.jpg";
import BOY_1 from "../assets/images/BOY_1.jpg";
import BOY_2 from "../assets/images/BOY_2.jpg";
import BOY_3 from "../assets/images/BOY_3.jpg";

// IMPORT

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";

import { useState } from "react";
import { HiOutlineHome } from "react-icons/hi2";

import { BiSearchAlt } from "react-icons/bi";

import { BsHouseCheck } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";

import { GiHouseKeys } from "react-icons/gi";
import { CiSearch, CiSettings } from "react-icons/ci";
import Filter from "../components/Filter";
import Card from "../components/Card";
import ContainerLayout from "../layouts/ContainerLayout";
import Rent from "../components/Rent";
import Type from "../components/Type";
import Testimonials from "../components/Testimonials";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="app">
      <section className="header">
        {isOpen && <Filter close={() => setIsOpen(false)} />}
        <div className="header__navigation">
          <div className="header__navigation--wrapper">
            <h5>Houset</h5>
          </div>
          <ul className="header__navigation--wrapper">
            <li className="header__navigation--item">
              <a href="#" className="header__navigation--link">
                Accueil
              </a>
            </li>
            <li className="header__navigation--item">
              <a href="#" className="header__navigation--link">
                À Propos
              </a>
            </li>
            <li className="header__navigation--item">
              <a href="#" className="header__navigation--link">
                Pourquoi nous
              </a>
            </li>
            <li className="header__navigation--item">
              <a href="#" className="header__navigation--link">
                Propriétés
              </a>
            </li>
            <li className="header__navigation--item">
              <a href="#" className="header__navigation--link">
                Aide
              </a>
            </li>
          </ul>
          <div className="header__navigation--wrapper">
            <button className="header__navigation--button">Connexion</button>
            <button className="header__navigation--button">
              Ajouter une propriété
            </button>
          </div>
        </div>
        <div className="header__center">
          <div className="header__center--left">
            <h1 className="header__center--title">
              Trouver l'endroit idéal pour vivre en famille
            </h1>
            <div className="header__center--search">
              <div className="search__wrapper">
                <span className="icon__house">
                  <HiOutlineHome />
                </span>
                <input
                  type="text"
                  placeholder="Rechercher"
                  className="search__input"
                />
              </div>
              <div className="search__wrapper">
                <div
                  className="search__wrapper--setting"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="icon__setting">
                    <CiSettings />
                  </span>
                  <p>Filtre</p>
                </div>
                <span className="icon__search">
                  <CiSearch />
                </span>
              </div>
            </div>
          </div>
          <div className="header__center--right">
            <img src={Image_1} className="header__center--img" alt="" />
            <div className="header__center__wrapper">
              <img src={Image_2} className="header__center--img" alt="" />
              <img src={Image_3} className="header__center--img" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="explanation">
        <div className="explanation__wrapper">
          <div className="explanation__wrapper--text">
            <h1>La nouvelle façon de trouver sa maison</h1>
            <p>
              À partir de 10 $ par jour avec des remises sur des offres limitées
              dans le temps.
            </p>
            <button className="explanation__wrapper--button">
              Comment ça marche ?
            </button>
          </div>
        </div>
        <div className="explanation__wrapper">
          <Card
            number={"01"}
            icon={<BiSearchAlt />}
            title={"Recherchez la maison de vos rêves"}
          />
          <Card
            number={"02"}
            icon={<BsHouseCheck />}
            title={"Choisissez la maison qui vous plaît"}
          />
          <Card
            number={"03"}
            icon={<FaHandsHelping />}
            title={"Demande de renseignements sur ce bien"}
          />
          <Card
            number={"04"}
            icon={<GiHouseKeys />}
            title={"Soyez propriétaire de votre logement"}
          />
        </div>
      </section>
      <ContainerLayout
        title="Propriétés à louer"
        link="Voir toutes les propriétés"
      >
        <div className="house">
          <Rent
            image={Image_4}
            title="Maison familiale spacieuse"
            description="538 Hart St, Brooklyn"
            price="550"
          />
          <Rent
            image={Image_5}
            title="Maison familiale spacieuse"
            description="538 Hart St, Brooklyn"
            price="550"
          />
          <Rent
            image={Image_6}
            title="Maison familiale spacieuse"
            description="538 Hart St, Brooklyn"
            price="550"
          />
          <Rent
            image={Image_7}
            title="Maison familiale spacieuse"
            description="538 Hart St, Brooklyn"
            price="550"
          />
        </div>
      </ContainerLayout>
      <section className="find">
        <div className="find__wrapper">
          {" "}
          <h1 className="find__wrapper--title">
            Trouvons votre prochaine maison Ensemble
          </h1>
          <p className="find__wrapper--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus beatae debitis laborum accusamus quod necessitatibus,
            adipisci aperiam. Ut illo, iusto consequatur nobis aut quis
            distinctio omnis? Possimus incidunt sapiente molestias.
          </p>
          <button className="find__wrapper--button">Lancer la recherche</button>
          <div className="find__wrapper--numbers">
            <div className="find__wrapper--container">
              <h4 className="find__wrapper--number">300K+</h4>
              <p className="find__wrapper--explanation">Propriétés</p>
            </div>
            <div className="find__wrapper--container">
              <h4 className="find__wrapper--number">300K+</h4>
              <p className="find__wrapper--explanation">Propriétés</p>
            </div>
            <div className="find__wrapper--container">
              <h4 className="find__wrapper--number">300K+</h4>
              <p className="find__wrapper--explanation">Propriétés</p>
            </div>
          </div>
        </div>
        <img className="find__wrapper" />
      </section>
      <ContainerLayout
        title="Explorer les types d'appartements"
        link="Tous les types"
      >
        <div className="types">
          <Swiper
            // onSwiper={(swiper) => {
            //   swiperRef.current = swiper;
            // }}
            slidesPerView={5}
            spaceBetween={20}
            autoplay={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Type image={Type_1} title="Maisons" number="4" />
            </SwiperSlide>
            <SwiperSlide>
              <Type image={Type_2} title="Appartements" number="3" />
            </SwiperSlide>
            <SwiperSlide>
              <Type image={Type_3} title="Bureau" number="4" />
            </SwiperSlide>
            <SwiperSlide>
              <Type image={Type_4} title="Villa" number="4" />
            </SwiperSlide>
            <SwiperSlide>
              <Type image={Type_5} title="Maison de ville" number="4" />
            </SwiperSlide>
            <SwiperSlide>
              <Type image={Type_6} title="Bungalow" number="8" />
            </SwiperSlide>
          </Swiper>
        </div>
      </ContainerLayout>
      <section className="testimonials">
        <div className="testimonials__header">
          <h4 className="testimonials__header--title">
            Les gens aiment vivre avec un agent immobilier
          </h4>
          <p className="testimonials__header--description">
            Écoutez ce que nos clients ont à dire sur leur parcours immobilier
            avec nous
          </p>
        </div>
        <div className="testimonials__wrapper">
          <Swiper
            // onSwiper={(swiper) => {
            //   swiperRef.current = swiper;
            // }}
            slidesPerView={3}
            spaceBetween={20}
            autoplay={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Testimonials
                image={WOMAN_1}
                nom="Isabelle Boucher"
                role="Vendeuse"
                temoignage="Je suis reconnaissante pour le professionnalisme et l'engagement dont votre équipe a fait preuve lors de la vente de ma maison. Vous avez pris en charge tous les détails, ce qui a rendu le processus sans stress. Merci pour votre excellent travail"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials
                image={BOY_1}
                nom="Thomas Leroux"
                role="Acheteur"
                temoignage="L'achat de notre première maison aurait été beaucoup plus compliqué sans l'aide de votre équipe. Vous avez répondu à toutes nos questions et nous avez guidés tout au long du processus. Nous sommes ravis de notre nouvelle maison."
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials
                image={WOMAN_2}
                nom="Claire Dupuis"
                role="Locataire"
                temoignage="Je suis très heureuse d'avoir trouvé un appartement à louer avec votre agence. Le processus de location a été simple et efficace, et l'équipe a été très serviable. Je recommande vivement vos services"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials
                image={BOY_2}
                nom="Pierre Moreau"
                role="Investisseur"
                temoignage="En tant qu'investisseur, j'apprécie la façon dont votre équipe trouve des opportunités rentables. Votre connaissance du marché est impressionnante. Grâce à vous, mes investissements ont généré des rendements remarquables."
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials
                image={WOMAN_3}
                nom="Alice Girard"
                role="Vendeuse"
                temoignage="Je tiens à exprimer ma gratitude pour votre travail exceptionnel dans la vente de ma propriété. Votre équipe a fait preuve de professionnalisme et a trouvé un acheteur rapidement. Je recommande votre agence à tous mes amis."
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials
                image={WOMAN_4}
                nom="Julie Dupont"
                role="Acheteuse"
                temoignage="Mon mari et moi avons été impressionnés par la qualité du service que nous avons reçu. Votre équipe nous a guidés à chaque étape de l'achat de notre maison. Nous sommes maintenant propriétaires d'une maison parfaite pour notre famille."
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials
                image={WOMAN_5}
                nom="Emma Lefevre"
                role="Locataire"
                temoignage="Je suis très satisfaite de l'appartement que j'ai loué avec votre agence. L'équipe a été très réactive et m'a aidée à trouver un endroit qui correspond parfaitement à mes besoins. Merci pour votre excellent service."
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials
                image={WOMAN_6}
                nom="Sophie Lambert"
                role="Investisseuse"
                temoignage="Votre équipe m'a aidée à trouver des opportunités d'investissement exceptionnelles. Grâce à vos conseils judicieux, mes investissements immobiliers ont été un succès. Je vous suis reconnaissante pour votre expertise."
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials
                image={WOMAN_7}
                nom="Lucie Martin"
                role="Vendeuse"
                temoignage="Vendre ma propriété avec votre agence a été une expérience exceptionnelle. Les agents étaient compétents, attentionnés et ont suivi chaque détail du processus. Je suis extrêmement satisfaite des résultats."
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials
                image={BOY_3}
                nom="Martin"
                role="Acheteur"
                temoignage="Grâce à l'équipe de l'agence immobilière, j'ai trouvé la maison de mes rêves. Le processus d'achat a été incroyablement fluide et sans stress. Merci pour votre professionnalisme et votre dévouement."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default Home;
