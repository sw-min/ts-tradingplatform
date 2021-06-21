import MarketListListUI from "./MarketList.presenterList";
import MarketListCardUI from "./MarketList.presenterCard";
import AppsIcon from "@material-ui/icons/Apps";
import ViewAgendaIcon from "@material-ui/icons/ViewAgenda";
import {
  Search,
  ButtonFilter,
  WrapperPaginationButtons,
  Page,
  WrapperRowPagination,
  ButtonShowType,
  WrapperRowButton,
  WrapperRowButtonInputs,
  WrapperRowItemsListChild,
  WrapperColumnItemsList,
  WrapperRowItemsList,
  ButtonSearch,
  WrapperSearchInputDiv,
  SearchImg,
  BestCardsIMG,
  WrapperRow,
  WrapperRowButtonSelling,
  BestCardsTitle,
  WrapperColumnBestContentInner,
  BestCardsTopHalf,
  BestCardsPrice,
  Wrapper,
  WrapperColumnBestCardsChild,
  WrapperColumn,
  WrapperRowBestCards,
  WrapperColumnBestCards,
  WrapperColumnBestCardsContent,
  WrapperColumnBestCardsTitle,
  BestCardsContent,
  WrapperRowBest,
  ButtonSelling,
  ItemsListImg,
  ItemsListTitle,
  ItemsListContent,
  ItemsListHashtag,
  ItemsListUserIcon,
  ItemsListUser,
  ItemsListPrice,
  WrapperItems,
  ButtonCreateItem,
} from "./MarketList.styles";
import { useEffect, useState } from "react";
import FirstPageRoundedIcon from "@material-ui/icons/FirstPageRounded";
import LastPageRoundedIcon from "@material-ui/icons/LastPageRounded";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import { useRouter } from "next/router";

const initshowtype = {
  recent: true,
  hprice: false,
  lprice: false,
  rating: false,
};
const initsorttype = {
  recent: "recent",
  price: "price",
  createdAt: "date",
};

const MarketListUI = ({
  bestItems,
  onClickSearch,
  onChangeSearch,
  usedItems,
  currentPage,
  onClickPage,
  onLeftArrowClick,
  onLeftFirstArrowClick,
  holder,
  onRightArrowClick,
  onRightLastArrowClick,
}) => {
  const [showDisplayChoice, setShowDisplayChoice] = useState<boolean>(true);
  const [selltype, setIsActive] = useState<boolean>(true);
  const [showtype, setShowType] = useState(initshowtype);

  const router = useRouter();

  const onClickRoutWrite = () => {
    router.push("write");
  };
  const onClickDisplay = () => {
    setShowDisplayChoice((prev) => !prev);
  };
  const onClickSellType = () => {
    setIsActive((prev) => !prev);
  };
  const onClickShowType = (event) => {
    const holder = { ...initshowtype, recent: false, [event.target.id]: true };
    setShowType(holder);

    if (usedItems) {
      let newArr = [...usedItems.fetchUseditems];
      if (showtype.recent) newArr.sort((a, b) => b.price - a.price);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onClickSearch();
    }
  };

  return (
    <Wrapper>
      {/* Best Items */}
      <WrapperColumn>
        <WrapperColumn>
          <WrapperColumnBestCardsTitle>베스트 상품</WrapperColumnBestCardsTitle>
          <WrapperRowBest>
            {bestItems?.fetchUseditemsOfTheBest.map((data) => (
              <WrapperColumnBestCards>
                <WrapperColumnBestCardsChild>
                  <BestCardsTopHalf>
                    <BestCardsIMG src="/loginbackground.png" />
                  </BestCardsTopHalf>
                  <WrapperColumnBestCardsContent>
                    <BestCardsTitle>{data.name}</BestCardsTitle>
                    <WrapperRowBestCards>
                      <WrapperColumnBestContentInner>
                        <BestCardsContent>{data.contents}</BestCardsContent>
                        <BestCardsPrice>{data.price}원</BestCardsPrice>
                      </WrapperColumnBestContentInner>
                      <WrapperColumnBestContentInner>
                        <img
                          src="/heartyellow.png"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "20px",
                            height: "20px",
                          }}
                        />
                        <div>20</div>
                      </WrapperColumnBestContentInner>
                    </WrapperRowBestCards>
                  </WrapperColumnBestCardsContent>
                </WrapperColumnBestCardsChild>
              </WrapperColumnBestCards>
            ))}
          </WrapperRowBest>
        </WrapperColumn>
        {/* ItemLists */}
        <WrapperColumn>
          <WrapperRowButtonInputs>
            <WrapperRowButtonSelling>
              <ButtonSelling isActive={selltype} onClick={onClickSellType}>
                판매중 상품
              </ButtonSelling>
              <ButtonSelling isActive={!selltype} onClick={onClickSellType}>
                판매된 상품
              </ButtonSelling>
            </WrapperRowButtonSelling>
            <WrapperSearchInputDiv>
              <SearchImg src="/search.png" onClick={onClickSearch} />
              <Search
                type="input"
                placeholder="제품을 검색해주세요"
                onChange={onChangeSearch}
                onKeyDown={handleKeyDown}
              />
            </WrapperSearchInputDiv>
            {/* 날짜 */}
            <WrapperRow>
              <ButtonShowType
                id="recent"
                isActive={showtype.recent}
                onClick={onClickShowType}
              >
                최신순
              </ButtonShowType>
              <ButtonShowType
                id="hprice"
                isActive={showtype.hprice}
                onClick={onClickShowType}
              >
                높은가격순
              </ButtonShowType>
              <ButtonShowType
                id="lprice"
                isActive={showtype.lprice}
                onClick={onClickShowType}
              >
                낮은가격순
              </ButtonShowType>
              <ButtonShowType
                id="rating"
                isActive={showtype.rating}
                onClick={onClickShowType}
              >
                평점순
              </ButtonShowType>
            </WrapperRow>
            <WrapperRow>
              변경하기:
              {showDisplayChoice ? (
                <ViewAgendaIcon
                  style={{ cursor: "pointer" }}
                  onClick={onClickDisplay}
                />
              ) : (
                <AppsIcon
                  style={{ cursor: "pointer" }}
                  onClick={onClickDisplay}
                />
              )}
            </WrapperRow>
          </WrapperRowButtonInputs>
        </WrapperColumn>
        {/* List */}
        {showDisplayChoice ? (
          <MarketListCardUI usedItems={usedItems} />
        ) : (
          <MarketListListUI usedItems={usedItems} />
        )}
        <WrapperRowPagination>
          <ButtonFilter>
            <img src="/filter.png" style={{ height: 18, width: 18 }} />
            정렬
          </ButtonFilter>
          <WrapperPaginationButtons>
            <FirstPageRoundedIcon onClick={onLeftFirstArrowClick} />
            <ChevronLeftRoundedIcon onClick={onLeftArrowClick} />
            {new Array(10)
              .fill(1)
              .filter((_, index) => index + holder <= Math.ceil(10))
              .map((_, index) => (
                <Page
                  id={String(index + holder)}
                  onClick={onClickPage}
                  isActive={currentPage == index + holder}
                >
                  {index + holder}
                </Page>
              ))}
            <ChevronRightRoundedIcon onClick={onRightArrowClick} />
            <LastPageRoundedIcon onClick={onRightLastArrowClick} />
          </WrapperPaginationButtons>
          <ButtonCreateItem onClick={onClickRoutWrite}>
            상품 등록하기
          </ButtonCreateItem>
        </WrapperRowPagination>
      </WrapperColumn>
    </Wrapper>
  );
};

export default MarketListUI;
