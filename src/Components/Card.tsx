import styles from "./Card.module.css";

type CardProps = {
  title: string;
  description: string;
  className?: string;
  img?: string;
};

const Card: React.FC<CardProps> = ({ title, description, className, img }) => {
  const cardClasses = `${styles.card} ${className} || ""`;

  return (
    <div className={cardClasses}>
      {img && <img src={img} alt="placeholder" />}
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>
          <h2>{title}</h2>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
