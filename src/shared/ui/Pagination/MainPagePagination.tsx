import { Button } from "../Button/Button";
import "./MainPagePagination.css";

type PaginationProps = {
  data: any[];
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

export function Pagination({
  currentPage,
  setCurrentPage,
  data,
  itemsPerPage,
}: PaginationProps) {
  const TOTAL_PAGES = Math.max(1, Math.ceil(data.length / itemsPerPage));
  const JUMP = 3;

  const goToPage = (page: number) => {
    const safePage = Math.max(1, Math.min(page, TOTAL_PAGES));
    setCurrentPage(safePage);
  };

  const windowSize = 1;
  const pages = new Set<number>([1, TOTAL_PAGES]);

  for (let p = currentPage - windowSize; p <= currentPage + windowSize; p++) {
    if (p >= 1 && p <= TOTAL_PAGES) pages.add(p);
  }

  const sortedPages = [...pages].sort((a, b) => a - b);
  // формирование массива с точками
  const view: Array<number | "dots"> = [];
  for (let i = 0; i < sortedPages.length; i++) {
    const current = sortedPages[i];
    const prev = sortedPages[i - 1];

    if (i > 0 && current - prev > 1) {
      view.push("dots");
    }
    view.push(current);
  }

  return (
    <div className="pagination-container">
      <Button
        className="pagination-button"
        buttonText={"<<"}
        onClick={() => goToPage(currentPage - JUMP)}
        disabled={currentPage === 1}
      />
      <Button
        className="pagination-button"
        buttonText={"<"}
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {view.map((item, idx) =>
        item === "dots" ? (
          <span key={`dots-${idx}`} className="pagination-ellipsis">
            ...
          </span>
        ) : (
          <Button
            className={`pagination-button ${currentPage === item ? "current" : ""}`}
            key={`page-${item}`}
            buttonText={item}
            onClick={() => goToPage(item)}
            disabled={currentPage === item}
          />
        ),
      )}

      <Button
        className="pagination-button"
        buttonText={">"}
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === TOTAL_PAGES}
      />
      <Button
        className="pagination-button"
        buttonText={">>"}
        onClick={() => goToPage(currentPage + JUMP)}
        disabled={currentPage === TOTAL_PAGES}
      />
    </div>
  );
}
