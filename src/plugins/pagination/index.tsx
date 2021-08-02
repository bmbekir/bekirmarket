import styles from "./pagination.module.scss";
import prevImg from "./prev.svg";
import nextImg from "./next.svg";
interface PaginationProps {
  pageCount: number;
  page: number;
  serialCount?: number;
  onPageChange?(page: number): void;
}
const getPageNumbers = (
  pageCount: number,
  page: number,
  serialCount: number
) => {
  const list = new Set<number>();
  const half = Math.floor(serialCount / 2);
  for (let index = 1; index <= serialCount; index++) {
    list.add(index);
  }
  for (let index = page - half; index <= page + half; index++) {
    list.add(index);
  }
  for (let index = pageCount - serialCount; index <= pageCount; index++) {
    list.add(index);
  }
  return Array.from(list)
    .filter((item) => item <= pageCount && item > 0)
    .sort((item1, item2) => item1 - item2);
};
export default ({
  pageCount,
  page,
  serialCount = 4,
  onPageChange = () => {},
}: PaginationProps) => {
  const pages = getPageNumbers(pageCount, page, serialCount);
  return (
    <div className={styles["pagination"]}>
      <ul>
        {page != 1 ? (
          <li className={styles["image-page-button"]}>
            <a
              href="#"
              onClick={(ev) => {
                ev.preventDefault();
                onPageChange(page - 1);
              }}
            >
              <img src={prevImg} /> Prev
            </a>
          </li>
        ) : undefined}
        {pages.map((item, index) => {
          return (
            <>
              {index > 0 && pages[index - 1] - item < -1 ? (
                <li className={styles["ellips"]}>...</li>
              ) : undefined}
              <li
                key={index}
                className={item == page ? styles["active"] : undefined}
              >
                <a
                  href="#"
                  onClick={(ev) => {
                    ev.preventDefault();
                    if (item != page) onPageChange(item);
                  }}
                >
                  {item}
                </a>
              </li>
            </>
          );
        })}
        <li className={styles["image-page-button"]}>
          <a
            href="#"
            onClick={(ev) => {
              ev.preventDefault();
              onPageChange(page + 1);
            }}
          >
            Next <img src={nextImg} />
          </a>
        </li>
      </ul>
    </div>
  );
};
