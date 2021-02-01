import styled from "styled-components";

export default styled.div`
 margin-bottom: 20vh;
 padding: 0 10px;

h2 {
  margin-bottom: 10vh;
}

 img {
  border-radius: 20px;
}

.rec-arrow-left,  .rec-arrow-right{
 background: none !important;
}

.rec-arrow-left:hover,
 .rec-arrow-left:focus,
  .rec-arrow-right:hover,
   .rec-arrow-right:focus
{
  background-color: var(--primary) !important;
}

.rec-dot_active{
 background: none;
 box-shadow: 0 0 1px 3px var(--primary) !important
}

.rec-dot:focus{
 background: none;
}

`;
