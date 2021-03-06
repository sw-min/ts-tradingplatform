import {
  Wrapper,
  Name,
  WrapperComments,
  WrapperColumnButton,
  WrapperGoToList,
  WrapperEditBoard,
  LikeIcon,
  WrapperUserInfoColumn,
  CommentIcon,
  CommentText,
  InputCommentMaxText,
  InputCommentRating,
  InputCommentAuthor,
  InputCommentPassword,
  InputCommentText,
  InputCommentTextButton,
  WrapperContent,
  WrapperRow,
  WrapperColumn,
  DateCreated,
  ProfileIcon,
  Concert,
  PostTitle,
  PostContent,
  Video,
  DislikeIcon,
  LikeColor,
  DislikeColor,
  WrapperRowBoardCreator,
  WrapperYouTubePlayer,
  WrapperRowLikeButtons,
  WrapperColumnBoardBottom,
  WrapperRowButtons,
  WrapperColumnLikeButtons,
  WrapperCenterLike,
  WrapperProfileIcon,
  WrapperLinkMap,
  ImgLink,
  ImgMap,
} from "./BoardDetail.styles";
import React from "react";
import ReactPlayer from "react-player/youtube";
import BoardDetailItemUI from "./BoardDetail.presenterItem";
import { HalfRating } from "../../../commons/star";

export default function BoardDetailUI({
  data,
  onClickRegister,
  onChangeInput,
  comments,
  characterCount,
  onClickRouting,
  onClickEdit,
  onClickLike,
  onClickDislike,
  refetch,
}) {
  console.log(data?.fetchBoard.images);
  return (
    <Wrapper>
      <WrapperContent>
        <WrapperRow>
          <WrapperRowBoardCreator>
            <WrapperProfileIcon>
              <ProfileIcon src="/ProfileIcon.png" />
            </WrapperProfileIcon>
            <WrapperUserInfoColumn>
              <Name>{data?.fetchBoard.writer}</Name>
              <DateCreated>
                Date:{" "}
                {data?.fetchBoard.createdAt.slice(0, 10).replaceAll("-", ".")}
              </DateCreated>
            </WrapperUserInfoColumn>
            <WrapperLinkMap>
              <ImgLink src="/link.png" />
              <ImgMap src="/map.png" />
            </WrapperLinkMap>
          </WrapperRowBoardCreator>
        </WrapperRow>
        <WrapperRow>
          <WrapperColumn>
            <PostTitle>{data?.fetchBoard.title}</PostTitle>
            <img src={data?.fetchBoard.images[0]} />
            <PostContent>{data?.fetchBoard.contents}</PostContent>
            <Video src={data?.fetchBoard.video}></Video>
          </WrapperColumn>
        </WrapperRow>
        <WrapperRow>
          <WrapperColumnBoardBottom>
            <WrapperYouTubePlayer>
              <ReactPlayer
                controls={true}
                width={486}
                height={240}
                url={data?.fetchBoard.youtubeUrl}
              />
            </WrapperYouTubePlayer>
            <WrapperCenterLike>
              <WrapperRowLikeButtons>
                <WrapperColumnLikeButtons>
                  <LikeIcon src="/likebutton.png" onClick={onClickLike} />
                  <LikeColor>{data?.fetchBoard.likeCount}</LikeColor>
                </WrapperColumnLikeButtons>
                <WrapperColumnLikeButtons>
                  <DislikeIcon
                    src="/dislikebutton.png"
                    onClick={onClickDislike}
                  />
                  <DislikeColor>{data?.fetchBoard.dislikeCount}</DislikeColor>
                </WrapperColumnLikeButtons>
              </WrapperRowLikeButtons>
            </WrapperCenterLike>
          </WrapperColumnBoardBottom>
        </WrapperRow>
      </WrapperContent>
      {/* ????????????/???????????? */}
      <WrapperColumnButton>
        <WrapperRowButtons>
          <WrapperGoToList onClick={onClickRouting}>
            <strong>????????????</strong>
          </WrapperGoToList>
          <WrapperEditBoard onClick={onClickEdit}>
            <strong>????????????</strong>
          </WrapperEditBoard>
        </WrapperRowButtons>
      </WrapperColumnButton>
      {/* ?????? text */}
      <WrapperComments>
        <WrapperColumn>
          <WrapperColumn>
            <WrapperRow>
              <CommentIcon src="/CommentIcon.png" />
              <CommentText>??????</CommentText>
            </WrapperRow>
          </WrapperColumn>
          <div>
            <WrapperColumn>
              <WrapperRow>
                <InputCommentAuthor
                  type="text"
                  name="writer"
                  placeholder="?????????"
                  onChange={onChangeInput}
                ></InputCommentAuthor>
                <InputCommentPassword
                  type="password"
                  name="password"
                  placeholder="????????????"
                  onChange={onChangeInput}
                ></InputCommentPassword>
                <HalfRating onChangeInput={onChangeInput} />
              </WrapperRow>
            </WrapperColumn>
            <WrapperColumn>
              <InputCommentText
                name="contents"
                placeholder="??????????????? ?????? ??? ???????????????, ?????? ??????, ?????? ??????, ?????? ?????? ????????? ???????????? ??? ????????? ??? ?????????, ?????? ?????? ???????????? ????????? ??????????????? ????????????."
                maxLength={100}
                onChange={onChangeInput}
              ></InputCommentText>
            </WrapperColumn>
            <WrapperColumn>
              <WrapperRow>
                <InputCommentMaxText>{characterCount}/100</InputCommentMaxText>
                <InputCommentTextButton onClick={onClickRegister}>
                  ????????????
                </InputCommentTextButton>
              </WrapperRow>
            </WrapperColumn>
          </div>
          <WrapperColumn>
            {comments?.fetchBoardComments.map((comments, index) => (
              <BoardDetailItemUI
                key={comments._id}
                index={index}
                comments={comments}
                refetch={refetch}
              />
            ))}
          </WrapperColumn>
        </WrapperColumn>
      </WrapperComments>
    </Wrapper>
  );
}
