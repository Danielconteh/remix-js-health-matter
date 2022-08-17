/* eslint-disable react/jsx-pascal-case */
import Single_Nutrition_Detail from '~/component/utilite/single_nutrition_detail'

const Nutrition_summary = ({ data }: any) => {
  return (
    <>
      <Single_Nutrition_Detail
        heading1='nutrition facts'
        heading2='description'
        value={data[0]}
      />

      <Single_Nutrition_Detail
        heading1='Health benefits'
        heading2={`different pictures of ${data[0]?.name}`}
        value={data[0]}
        item='2'
      />

      <Single_Nutrition_Detail
        heading1='do you know?'
        heading2='important gist'
        value={data[0]}
        item='3'
      />
    </>
  )
}

export default Nutrition_summary
