import styles from './views.module.scss';

export default function ReviewsView({ review }) {
  return (
    <ul className={styles.reviewList}>
      {review.map(item => {
        return (
          <li key={item.name} className={styles.reviewInfo}>
            <img
              className={styles.reviewAvatar}
              src={item.author_details.avatar_path.substring(1)}
              alt={item.author}
              width={'100px'}
              height={'100px'}
            ></img>
            <div className={styles.castsData}>
              <p className={styles.castsText}>
                <span className={styles.isBold}>name: </span>
                {item.author} (created: {item.created_at})
              </p>

              <p className={styles.castsText}>{item.content}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
