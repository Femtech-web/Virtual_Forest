import styles from  '../GenStyles';

export const navbarStyles = {
    container: `${styles.flexBtw} bg-navPalette px-[2%]`,
    ul: `${styles.flexEvenly} Kaisei-Opti text-palette2`,
    li: 'py-2 pr-8 text-xl cursor-pointer',
    btnCont: 'ml-4 flex items-center',
    btn: 'text-white bg-palette2 rounded-full outline-none Kaisei-Opti text-lg',
    userImg: `${styles.flexCenter} rounded-full bg-palette6 w-[2.75rem] h-[2.75rem] ml-3 cursor-pointer`
}

export const mapStyles = {
    btnCont: 'absolute top-4 right-5 flex inter drop-shadow-lg',
    mapBtn: (others) => `${others} pt-1 pb-2 px-4  border-[1px] border-white cursor-pointer`,
    board: 'w-[108px] h-[111px] absolute top-[14.5%] right-[44%] inter',
    icon: 'flex mb-1 items-center',
    text: 'text-[0.6rem] ml-2 font-semibold',
    iconCont: `${styles.flexCenter} w-full`,
    span: `${styles.flexCenter} w-[20px] h-[20px] rounded-full`,
}

export const AdStyles = {
    container: 'inter border-b-2 border-black relative',
    firstCont: 'w-full min-h-[7.375rem] bg-palette6 flex',
    ingredients: 'flex flex-col justify-center text-palette2 ml-6',
    span: 'font-normal text-[0.8rem]',
    iconCont: 'flex items-center mt-2',
    iconSpan: `${styles.flexCenter} w-[60px] h-[60px] rounded-full`,
    total: 'text-sm font-semibold ml-3 max-w-[100px]',
    btnCont: 'flex flex-col justify-end -ml-10 mb-2',
    btn: 'flex justify-evenly mb-2',
    btn_1_styles: 'rounded-md text-white px-6 font-semibold',
    extraSeeds: `${styles.flexBtw} bg-palette4 p-2 ml-12 min-w-[31.1875rem] h-[5.1875rem] my-auto`,
    extraSeedText: 'flex flex-col text-sm',
    banner: 'w-[85%] h-[9.5625rem] object-cover',
    subscribe: `${styles.flexCenter} h-[9.5625rem] bg-palette5 w-[16%] -ml-3 flex-col p-4`,
    subscribeBtn: 'mt-2 rounded-md px-6 text-white',
    stagesCont: `${styles.flexBtw} w-1/2 px-[5%] pt-[3%] pb-[10%]`,
    stage: 'flex justify-start mb-2 text-sm',
    stageHeading: 'font-semibold mb-2',
    tools: 'flex justify-start mb-2 text-sm',
    nft: 'inter w-1/2 p-4 flex text-palette2',
    nftText: 'flex flex-col w-[90%] p-4 relative',
    nftHeading: 'font-bold my-4 text-xl',
    nftBtn: 'rounded-md absolute bottom-2 px-4 text-white'
}

export const aboutStyles = {
    header: 'Kaisei-Opti my-2 mb-4 text-palette2 text-4xl',
    sectionCont: 'w-1/2 pr-[15%] mt-10',
    sectionCont2: 'w-1/2 pr-[15%]',
    sectionCont3: 'w-1/2 mt-10',
    sectionHeader: 'text-[#170F49] font-semibold mb-4 text-xl',
    sectionText: 'text-[#6F6C90] text-left',
    flexEnd: `${styles.flexEnd}`,
    imgSpan:'w-[17rem] h-[17rem] border-black border-[1px] p-1',
    img: 'w-full border-black border-[1px]',
    doubleImg: 'w-1/2 relative -ml-12 h-[300px]',
    nft: 'w-[21.0625rem] h-[13.125rem] border-black border-[1px] p-1 absolute ',
}

export const faqStyles = {
    container: 'bg-navPalette min-h-[300px] px-[10%] py-[5%]',
    barCont: (openBar) => `${openBar && 'row-span-2' } p-4 bg-white rounded-lg flex flex-col justify-center `,
    question: `${styles.flexBtw} font-semibold w-full`,
    btn1: 'rounded-md px-2 text-white text-lg bg-palette3',
    btn2: 'rounded-md px-2 text-[#6F6C90] text-lg bg-[#F7F7FF]',
    answer: (openBar) => `${openBar ? 'h-auto' : 'h-0'} pt-2 w-[70%] text-sm text-[#6F6C90]`,
    header: 'Kaisei-Opti mb-12 text-palette2 text-3xl'
}

export const contactStyles = {
    container: 'bg-palette6 min-h-[300px] px-[10%] py-[5%]',
    sectionCont: 'w-1/2 poppins text-sm',
    header: 'Kaisei-Opti font-bold text-5xl mb-8',
    smallHeader: 'Kaisei-Opti text-xl font-bold mb-4',
    label: 'block mb-3',
    input: 'w-full h-[2.875rem] p-4',
    dropIcon: 'absolute right-4 top-3 cursor-pointer',
    textArea: 'h-[10.3125rem] w-full resize-none p-4',
    btn: 'text-center w-full mt-4'
}