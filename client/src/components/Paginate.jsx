import { useEffect } from "react";
import { ImageCard } from "./ImageCard";
import { RotateLoader } from "./Loader";
import { Container, LoaderWrapper } from "../styles/globalStyle";
import { useDispatch, useSelector } from "react-redux";
import { pushScrollData, pushIsFetching } from "../store/reducer";
import {
  Datas,
  isFetch,
  pages,
  dataCountReselect,
  isLoading,
} from "../store/selectors";

export const UlbiPagination = () => {
  const dispatch = useDispatch();

  const page = useSelector(pages);
  const dataCount = useSelector(dataCountReselect);
  const loader = useSelector(isLoading);
  const datas = useSelector(Datas);
  const isFetching = useSelector(isFetch);

  useEffect(() => {
    if (isFetching && datas.length < dataCount) {
      dispatch(pushScrollData(page));
    }
  }, [isFetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      93
    ) {
      dispatch(pushIsFetching(true));
    }
  };

  return (
    <Container>
      {datas.map((data) => (
        <ImageCard key={data._id} text={data} />
      ))}
      <LoaderWrapper>{loader && <RotateLoader />}</LoaderWrapper>
    </Container>
  );
};
