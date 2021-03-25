import styled from 'styled-components'

export const Card = styled.div`
  .card-action {
  display: flex;
  justify-content: center;
  cursor: pointer;
}

span{
  color: #fff !important;
  text-transform: uppercase;
  font-weight: bold !important;
  -webkit-text-stroke-width: 1px; /* largura da borda */
    -webkit-text-stroke-color: var(--primary-dark); /* cor da borda */
}

a {
  color: var(--primary-dark) !important;
}
`
