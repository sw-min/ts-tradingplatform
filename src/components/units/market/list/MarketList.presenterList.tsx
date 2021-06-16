import { useRouter } from "next/router"
import { ItemsListContent, ItemsListHashtag, ItemsListImg, ItemsListPrice, ItemsListTitle, ItemsListUser, ItemsListUserIcon, WrapperColumnItemsList, WrapperItems, WrapperRow, WrapperRowItemsList, WrapperRowItemsListChild, WrapperRowUser } from "./MarketList.styles"

const MarketListListUI = ({usedItems}) => {
  const router = useRouter();
  const onClickRoutDetail = (event) => {
    router.push(`/market/${event.target.id}`)
  }

  return (
    <WrapperColumnItemsList>
    {usedItems?.fetchUseditems.map((data) =>
      <WrapperRowItemsList>
          <WrapperRowItemsListChild>
            <WrapperRow>
              <WrapperItems style={{display:"flex",flexDirection:"column",justifyContent:"center",marginRight:"40px"}}>
                <ItemsListImg src="/loginbackground.png" />
              </WrapperItems>
              <WrapperItems>
                <ItemsListTitle id={data._id} onClick={onClickRoutDetail}>{data.name}</ItemsListTitle>
                <ItemsListContent>{data.contents}</ItemsListContent>
                <ItemsListHashtag>{data.tags}</ItemsListHashtag>
                <WrapperRowUser>
                  <ItemsListUserIcon src="/ProfileIcon.png" />
                  <ItemsListUser>{data.seller.name}</ItemsListUser>
                </WrapperRowUser>
              </WrapperItems>
            </WrapperRow>
            <WrapperItems >
              <ItemsListPrice>{`${data.price}원`}</ItemsListPrice>
            </WrapperItems>
          </WrapperRowItemsListChild>
      </WrapperRowItemsList>
    )}
  </WrapperColumnItemsList>
  )
}

export default MarketListListUI