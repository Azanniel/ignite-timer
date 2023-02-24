import styled from 'styled-components'

export const LayoutContainer = styled.div`
  min-height: calc(100vh - 10rem);

  display: flex;
  justify-content: center;
`

export const BoxContainer = styled.div`
  width: 100%;
  max-width: 74rem;

  margin: 5rem 2rem;
  padding: 2.5rem;

  background: ${(props) => props.theme.gray[800]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
