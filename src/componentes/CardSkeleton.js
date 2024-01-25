import { Skeleton } from "@mui/material";

export default function CardSkeleton() {
  return (
    <div className="cards-skeleton">
      {Array(20)
        .fill(0)
        .map((item, index) => (
          <div key={index} className="card-skeleton">
            <div className="skeleton-img">
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={"100%"}
                style={{ backgroundColor: "#3b3b3b" }}
              />
            </div>
            <div className="skeleton-nome">
              <Skeleton
                variant="text"
                sx={{ fontSize: "40px" }}
                style={{ backgroundColor: "#3b3b3b", marginTop: "0px" }}
              />
            </div>
          </div>
        ))}
    </div>
  );
}
