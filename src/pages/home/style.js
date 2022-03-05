import styled from "styled-components";

export const HomeWrapper = styled.div`
    overflow: hidden;    
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -10px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    font-size: 14px;
    color: #000;
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        margin-right: 10px;
        width: 32px;
        height: 32px;
        display: block;
        float: left;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;  
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        width: 125px;
        height: 100px;
        display: block;
        float: right;
        border-radius: 5px;     
    }
`;

export const ListInfo = styled.div`
    width: 490px;
    float: left;
    .title {
        margin: -7px 0 4px;
        display: inherit;
        line-height: 1.5;
        font-size: 18px;
        font-weight: 700;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
        margin-right: 8px;
    }
`;

export const RecommendWrapper = styled.div`
    width: 280px;
    float: right;
    overflow: hidden;  
    padding: 30px 0;
`;

export const RecommendItem = styled.div` 
    width: 280px;
    height: 50px;
    margin-bottom: 10px;
    background: url(${(props) => props.imgUrl});
    background-size: cover;
`;

export const WriterWrapper = styled.div`
    margin: 20px 0 5px; 
    width: 280px;
    overflow: hidden;  
    .rec {
        font-size: 14px;
        color: #969696;
    }
`;

export const RecommendWrite = styled.div`
    width: 280px;
    border-radius: 3px;
    line-height: 30px; 
    .pic {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin: 7px;   
    }
  
`;

export const WriterInfo = styled.div`
    width: 200px;
    float: right;
    .name {
        margin: 3px;
        display: inherit;
        font-size: 14px;
        font-weight: 450;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 12px;
        color: #999;
        margin-right: 8px;
        margin-top: -3px;
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    border: 1px solid #dcdcdc;
    border-radius: 20px;
    color: #fff;
    text-align: center;
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 30px;
    border: 1px solid #ccc;
    line-height: 30x;
    text-align: center;
    font-size: 14px;
`;