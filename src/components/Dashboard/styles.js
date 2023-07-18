import styles from '../GenStyles';

export const iconStyles = {
    imgCont: 'w-full min-h-[300px] bg-white',
    iconSpan: `${styles.flexCenter} h-[2.5rem] w-[2.5rem] rounded-full bg-[#C7C6C5] mt-6`,
    icon: 'w-[2rem] h-[2rem] cursor-pointer',
}

export const userStyles = {
    container: `${styles.flexCenter} flex-col r ml-9  w-[20.75rem] max-h-[32.1875rem] img-container -translate-y-[29%]`,
    innerCont: `${styles.flexCenter} w-full h-full px-6 py-3 flex-col`,
    imgCont: 'w-[13.5625rem] h-[13.5625rem]',
    imgInnerCont: `${styles.flexCenter} w-full h-full rounded-full border-[20px] border-palette1`,
    name: 'font-bold text-palette1 text-lg',
    title: 'text-[#544C4C] text-sm text-center',
    locationCont: 'text-[#544C4C] flex justify-center text-sm',
    stats: `${styles.flexBtw} w-full pt-2 px-8`,
    statCont: 'flex flex-col items-center',
    statText: 'text-palette1 font-bold text-2xl',
    statSubtext: 'text-sm text-[#544C4C]',
    btnCont: 'py-6 w-full flex justify-center items-center',
    btn: 'bg-palette1 text-white rounded-md px-6'
}

export const firstBox = {
    container: 'flex mt-12',
    navLinks:  'mr-12 mb-4 text-lg text-palette1 cursor-pointer',
    active: 'font-semibold border-b-[2px] border-b-palette1',
    firstCont: 'flex justify-between p-4 text-palette1 mr-12 w-[14.1875rem] h-[6.60656rem] rounded-md',
    firstHeader: 'text-xl font-semibold',
    firstText: 'w-full text-sm',
    firstImgCont: 'h-full flex items-center',
    imgSpan:'w-[3rem] h-[3rem] rounded-full p-2 bg-white',
}

export const secondBox = {
    boxContainer: 'flex flex-col items-center mr-12',
    header: 'mb-4 font-semibold text-lg text-palette1',
    header2: 'mb-4 font-semibold text-lg text-palette1 text-center',
    header3: 'text-palette1 font-bold text-3xl mb-4',
    innerCont:`${styles.flexBtw} w-[14.1875rem] h-[14.1875rem] rounded-md flex-col p-4`,
    imgCont: 'flex items-center flex-col text-palette1',
    btn: 'rounded-md bg-palette1 text-white px-6 text-sm'
}

export const thirdBox = {
    topCont: 'flex items-center flex-col text-palette1 px-8',
    bottomCont: 'flex flex-col items-center',
    innerCont: 'w-[14.1875rem] h-[14.1875rem] rounded-md flex-col p-8 bg-palette4',
    header: 'text-white font-semibold text-3xl mb-4'
}