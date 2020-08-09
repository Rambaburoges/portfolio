import styled from 'styled-components';
import workTheme from '../images/work_background.jpg';
import { media } from './Media';

export const WorkSection = styled.div`
  height: 100vh;
  ${media.sm`height: auto;`};
  background-image: url(${workTheme});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  .dark_background {
    background: rgba(0,0,0,0.6);
    width: 100%
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .work_wrapper {
    text-align: center;
  }

  .title {
    padding: 60px 0px;
    ${media.sm`padding: 40px 0px 0px;`};
  }
`

export const WorkList = styled.ul`
 list-style: none;
 display: flex;
 justify-content: center;
 align-items: center;
 ${media.sm`flex-direction: column;`};
 margin: 40px 0px;

`

export const EachWorkDes = styled.li`
  display: inline-block;
  margin: 20px;
  width: 30vh;
  height: 30vh;
  ${media.sm`width: 26vh; height: 24vh;`};
  text-align: center;
  background: lightgrey;
  padding: 15px;
  border-radius: 6px;

  .work-title {
    font-family: JosefinSansBold;
    font-size: 32px;
    margin: 0px;
    line-height: 37px;
    color: #00B5D5;
    font-weight: normal;
    word-spacing: 4px;
  }
  .work-details {
    font-family: KarlaRegular;
    visibility: hidden;
    font-size: 18px;
    line-height: 25px;
    color: #888;
    ${media.sm`font-size: 14px; line-height: 20px;`};
  }


`
