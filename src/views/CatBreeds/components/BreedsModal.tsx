import { type FC } from 'react'

import { CardItem, Grid, Modal, Skeletons } from '@/components'

import Styled from './BreedsModal.styles'
import type { CatImage } from '@/api/cats/cats.types'

type BreedImagesModalProps = {
  isLoading: boolean
  isError: boolean
  onClose: () => void
  images: CatImage[]
  actions?: (cat: CatImage) => React.ReactNode
}

const BreedsModal: FC<BreedImagesModalProps> = ({
  images,
  onClose,
  actions,
  isLoading,
  isError,
}) => {
  const { ModalContentWrapper } = Styled

  return (
    <Modal size="large" isOpen={!!images} onClose={onClose} ariaLabel="Preview Breeds">
      <ModalContentWrapper>
        <Skeletons.Loader
          error={isError}
          status={isLoading}
          loader={<Skeletons.Grid count={4} columns={4} />}
        >
          <Grid columns={4} gap="1rem">
            {images?.map(image => (
              <CardItem
                key={image.id}
                item={image}
                onSelect={onClose}
                actions={actions}
                data-testid="breed-cat-image"
              />
            ))}
          </Grid>
        </Skeletons.Loader>
      </ModalContentWrapper>
    </Modal>
  )
}

export default BreedsModal
