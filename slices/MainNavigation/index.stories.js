import SliceZone from 'vue-slicezone'
import model from './model'
import mocks from './mocks.json'
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
      mock: mocks[0],
      resolver() {
        return Slice
      },
    }
  },
  template:
    '<div style="background: #3182ce; padding: 20px; height: 120vh; display: flex; flex-direction: column; justify-content: center; align-items: center;"><h2 style="font-size: 3rem; color: white;">Page Content</h2> <p style="color: white;">Pssst, make sure to scroll, and check the mobile version</p><slice-zone :slices="[ mock ]" :resolver="resolver" /></div>',
})

DefaultSlice.storyName = mocks[0].name
