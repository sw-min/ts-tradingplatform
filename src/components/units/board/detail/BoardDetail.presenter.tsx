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
  WrapperColumnCommentTop,
  CommentText,
  WrapperColumnComment,
  CommentContent,
  ProfileIconComment,
  CommentReview,
  CommentName,
  CommentDate,
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
  CommentEditDelete,
  WrapperRowCommentEditDelete,
  WrapperCommentEdit,
  DislikeIcon,
  LikeColor,
  DislikeColor,
  WrapperRowBoardCreator,
  WrapperYouTubePlayer,
} from "./BoardDetail.styles";
import React from 'react'
import ReactPlayer from 'react-player/youtube'

export default function BoardDetailUI({
  data,
  onClickRegister,
  onChangeInput,
  aaa,
  characterCount,
  onClickRouting,
  onClickDeleteComment,
  onClickEdit,
  onClickLike,
  onClickDislike
}) {
  return (
    <Wrapper>
      <WrapperContent>
        <WrapperRow>
          <WrapperRowBoardCreator>
            <ProfileIcon src="/ProfileIcon.png" />
            <WrapperUserInfoColumn>
              <Name>{data?.fetchBoard.writer}</Name>
              <DateCreated>Date: {data?.fetchBoard.createdAt.slice(0, 10).replaceAll("-", ".")}</DateCreated>
            </WrapperUserInfoColumn>
          </WrapperRowBoardCreator>
        </WrapperRow>
        <WrapperRow>
          <WrapperColumn>
            <PostTitle>{data?.fetchBoard.title}</PostTitle>
            <Concert src="/Concert.png" />
            <PostContent>{data?.fetchBoard.contents}</PostContent>
            <Video src={data?.fetchBoard.video}></Video>
          </WrapperColumn>
        </WrapperRow>
        <WrapperRow>
          <WrapperColumn>
            <WrapperYouTubePlayer>
              <ReactPlayer controls={true} width={486} height={240} url={data?.fetchBoard.youtubeUrl} />
            </WrapperYouTubePlayer>
            <WrapperRow>
              <WrapperColumn>
                <LikeIcon src='/likebutton.png' onClick={onClickLike}/><LikeColor>{data?.fetchBoard.likeCount}</LikeColor>
              </WrapperColumn>
              <WrapperColumn>
                <DislikeIcon src="/dislikebutton.png" onClick={onClickDislike}/><DislikeColor>{data?.fetchBoard.dislikeCount}</DislikeColor>
              </WrapperColumn>
            </WrapperRow>
          </WrapperColumn>
        </WrapperRow>
      </WrapperContent>
      {/* 목록으로/수정하기 */}
      <WrapperColumnButton>
        <WrapperRow>
          <WrapperGoToList onClick={onClickRouting}>
            <strong>목록으로</strong>
          </WrapperGoToList>
          <WrapperEditBoard onClick={onClickEdit}>
            <strong>수정하기</strong>
          </WrapperEditBoard>
        </WrapperRow>
      </WrapperColumnButton>
      {/* 댓글 text */}
      <WrapperComments>
        <WrapperColumn>
          <WrapperColumn>
            <WrapperRow>
              <CommentIcon src="/CommentIcon.png" />
              <CommentText>댓글</CommentText>
            </WrapperRow>
          </WrapperColumn>
          <WrapperColumn>
            <WrapperRow>
              <InputCommentAuthor
                type="text"
                name="writer"
                placeholder="작성자"
                onChange={onChangeInput}
              ></InputCommentAuthor>
              <InputCommentPassword
                type="password"
                name="password"
                placeholder="비밀번호"
                onChange={onChangeInput}
              ></InputCommentPassword>
              <InputCommentRating
                type="number"
                name="rating"
                placeholder="1-5"
              ></InputCommentRating>
            </WrapperRow>
          </WrapperColumn>
          <WrapperColumn>
            <InputCommentText
              name="contents"
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              maxLength={100}
              onChange={onChangeInput}
            ></InputCommentText>
          </WrapperColumn>
          <WrapperColumn>
            <WrapperRow>
              <InputCommentMaxText>{characterCount}/100</InputCommentMaxText>
              <InputCommentTextButton onClick={onClickRegister}>
                등록하기
              </InputCommentTextButton>
            </WrapperRow>
          </WrapperColumn>
          <WrapperColumn>
            {aaa?.fetchBoardComments.map((data) => (
              <WrapperColumnComment>
                <WrapperRow>
                  <ProfileIconComment src="/ProfileIcon.png" />
                  <WrapperColumnCommentTop>
                    <WrapperRow>
                      <CommentName>
                        <strong>{data.writer}</strong>
                      </CommentName>
                      <CommentReview>평점: {data.rating}</CommentReview>
                      <CommentEditDelete src="/commentedit.png"></CommentEditDelete>
                      <CommentEditDelete src="/commentdelete.png" id={data._id} onClick={onClickDeleteComment}></CommentEditDelete>
                    </WrapperRow>
                    <CommentContent>{data.contents}</CommentContent>
                    <CommentDate>
                      날짜: {data.createdAt.slice(0, 10).replaceAll("-", ".")}
                    </CommentDate>
                  </WrapperColumnCommentTop>
                </WrapperRow>
              </WrapperColumnComment>
            ))}
          </WrapperColumn>
        </WrapperColumn>
        <WrapperColumn>{/* 등록하기 */}</WrapperColumn>
        <WrapperColumn>{/* 실제 댓글 */}</WrapperColumn>
      </WrapperComments>
    </Wrapper>
  );
}
