import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function LoadingPage() {
  const navigate = useNavigate();
  const urlDocument = new URL(document.location);
  const params = urlDocument.searchParams;
  const query = urlDocument.search;
  const date = params.get('date');
  const origin = params.get('origin');
  const destination = params.get('destination');

  const navigateFlight = () => {
    navigate(`/flights${query}`);
  };

  setTimeout(() => navigateFlight(), 4000);

  return (
    <LoadingCover>
      <LoadingImage />
      <LoadingBackground />
      <LoadingContainer>
        <LoadingTitle>
          <LoadingTitleText>
            {origin}에서 {destination}까지
          </LoadingTitleText>
          <LoadingTitleText>
            <span>편도 항공권을 찾고 있습니다.</span>
          </LoadingTitleText>
        </LoadingTitle>
        <LoadingData>
          <LoadingLocation>
            <LoadingEngTitle>{`${AIR_INITIAL[origin]}`}</LoadingEngTitle>
            <LoadingKorTitle>{origin}</LoadingKorTitle>
            <LoadingTime>{date}</LoadingTime>
          </LoadingLocation>
          <LoadingLocation>
            <LoadingEngTitle>{`${AIR_INITIAL[destination]}`}</LoadingEngTitle>
            <LoadingKorTitle>{destination}</LoadingKorTitle>
            <LoadingTime>{date}</LoadingTime>
          </LoadingLocation>
        </LoadingData>
        <LoadingContent>
          <LoadingContentText>아워트립 항공권 구매자를 위한</LoadingContentText>
          <LoadingContentText>
            렌터카 특별 혜택! 진짜 최저가로 예약하세요.
          </LoadingContentText>
        </LoadingContent>
        <GifBox />
      </LoadingContainer>
    </LoadingCover>
  );
}

const AIR_INITIAL = {
  제주: 'CJU',
  김포: 'GMP',
  부산: 'PUS',
  청주: 'CJJ',
  여수: 'RSU',
  광주: 'KWJ',
  대구: 'TAE',
  양양: 'YNY',
  군산: 'KUV',
  울산: 'USN',
  포항: 'KPO',
  인천: 'ICN',
};

const LoadingCover = styled.div`
  ${({ theme }) => theme.flex.flexBox('column')};
  position: relative;
  height: 100vh;
  background-size: cover;
  color: #f5fbff;
`;

const LoadingImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  background: url('images/loadingImg.jpg') 0/ 110%;
  background-size: full;
  background-repeat: no-repeat;
  @keyframes moveAirplane {
    0% {
      background-position: 0;
    }
    100% {
      background-position: 100% center;
    }
  }

  animation: moveAirplane 5s linear infinite;
`;

const LoadingBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: blue;
  opacity: 0.15;
`;

const LoadingContainer = styled.div`
  ${({ theme }) => theme.flex.flexBox('column')};
  z-index: 3;
`;

const LoadingTitle = styled.div`
  ${({ theme }) => theme.flex.flexBox('column')};
  padding-bottom: 3rem;
  font-size: 1.5rem;
`;

const LoadingTitleText = styled.div`
  padding-bottom: 0.5rem;
`;

const LoadingData = styled.div`
  ${({ theme }) => theme.flex.flexBox};
  width: 25rem;
  padding: 3rem 0rem;
  margin-bottom: 3rem;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
`;

const LoadingContent = styled.div`
  ${({ theme }) => theme.flex.flexBox('column')};
  margin-bottom: 3rem;
`;

const LoadingContentText = styled.div`
  padding: 0.2rem;
`;

const LoadingLocation = styled.div`
  ${({ theme }) => theme.flex.flexBox('column')};
  margin: 0rem 2rem;
`;

const LoadingEngTitle = styled.div`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const LoadingKorTitle = styled.div`
  padding: 0.5rem;
`;
const LoadingTime = styled.div``;

const GifBox = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-image: url('/images/earth.gif');
  background-size: 100%;
`;

export default LoadingPage;
