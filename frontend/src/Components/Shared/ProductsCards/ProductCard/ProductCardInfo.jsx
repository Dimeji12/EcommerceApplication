import { useTranslation } from "react-i18next";
import { translateProduct } from "../../../Cart/CartProducts/CartProduct";
import RateStars from "../../MidComponents/RateStars/RateStars";
import ProductColors from "../../MiniComponents/ProductColors/ProductColors";
import s from "./ProductCardInfo.module.scss";

const ProductCardInfo = ({ product, showColors, navigateToProductDetails }) =>
{
    const { shortName, price, discount, afterDiscount, rate, votes, colors } = product;
    const { t } = useTranslation();

    const translatedProductName = translateProduct({
        productName: shortName,
        translateMethod: t,
        translateKey: "shortName",
    });

    // Ensure the price is a valid number before calling toFixed
    const isValidPrice = typeof price === "number" && !isNaN(price);
    const formattedPrice = isValidPrice ? price.toFixed(2) : "N/A";

    const isValidDiscount = typeof discount === "number" && !isNaN(discount);
    const formattedDiscountPrice = isValidPrice && isValidDiscount && discount > 0 && discount < price
        ? (price - discount).toFixed(2)
        : null;

    return (
        <section className={s.productInfo}>
            <strong className={s.productName}>
                <a href="#" onClick={() => navigateToProductDetails()}>
                    {translatedProductName}
                </a>
            </strong>

            <div className={s.price}>
                {formattedDiscountPrice ? (
                    <>
                        £{formattedDiscountPrice}
                        <del className={s.afterDiscount}>£{formattedPrice}</del>
                    </>
                ) : (
                    <>
                        £{formattedPrice}
                    </>
                )}
            </div>

            <div className={s.rateContainer}>
                <RateStars rate={rate} />
                <span className={s.numOfVotes}>({votes})</span>
            </div>

            {showColors && (
                <div className={s.colors}>
                    <ProductColors colors={colors} />
                </div>
            )}
        </section>
    );
};

export default ProductCardInfo;
