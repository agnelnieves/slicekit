import SliceZone from 'vue-slicezone'
import model from './model'
import mocks from './mocks.json'
import customMocks from './customMocks.json'
import Slice from './'

export default {
  title: model.name,
}

// TODO: Update to loop over mocks.json
export const DefaultSlice = () => ({
  components: {
    Slice,
    SliceZone,
  },
  data() {
    return {
      mock: (() => {
        const newMock = { ...mocks[0] }

        newMock.primary.description = customMocks[0].primary.description
        newMock.primary.title = customMocks[0].primary.title
        newMock.primary.items = [...customMocks[0].primary.items]

        return newMock
      })(),
      resolver() {
        return Slice
      },
    }
  },
  template: '<slice-zone :slices="[ mock ]" :resolver="resolver" />',
})

DefaultSlice.storyName = mocks[0].name
