import { useTranslation } from "react-i18next";
import { aboutUs } from "src/Assets/Images/Images";
import s from "./AboutHeroSection.module.scss";

const AboutHeroSection = () =>
{
  const { t } = useTranslation();

  return (
    <section className={s.heroSection}>
      <section className={s.content}>

        <h2>{t("aboutPage.heroSection.heading")}</h2>

        <p>Welcome to Dales, your go-to destination for premium, high-quality products that elevate your everyday living. At Dales, we pride ourselves on offering a curated selection of items, carefully chosen for their style, functionality, and durability. Whether you're shopping for home essentials, the latest tech gadgets, or unique lifestyle accessories, we ensure that every product meets our high standards of excellence. Our mission is to bring you not only the best in design but also an exceptional shopping experience.</p>
        <p>Founded with a passion for quality and customer satisfaction, Dales strives to create a seamless, enjoyable online shopping journey. We believe in the power of choice and convenience, which is why we provide fast shipping, reliable customer support, and easy returns. At Dales, we’re not just selling products; we’re building a community of happy customers who love discovering new, exciting items that fit their lifestyle. Thank you for choosing us as your trusted eCommerce partner!</p>
      </section>

      {/* <div className={s.imgHolder}>
        <img src={aboutUs} alt={t("aboutPage.heroSection.imageAlt")} />
      </div> */}
    </section>

  );
};

export default AboutHeroSection;
