import styles from "../GenStyles";

export const manureStyles = {
    container: `${styles.flexCenter} fixed top-0 left-0 bg-black/50 w-full h-screen z-40`,
    subContainer: 'w-[24.5625rem] h-[30.125rem] rounded-md',
    topCont: 'w-full bg-palette2 h-auto rounded-tr-md rounded-tl-md py-2 px-1',
    btnSpan: 'relative w-[2rem] group cursor-pointer',
    btn: 'absolute top-2 left-2 opacity-0 group-hover:opacity-100',
    bottomCont: `${styles.flexCenter} flex-col  bg-white h-full rounded-br-md rounded-bl-md`,
    innerCont: 'flex flex-col items-center my-4',
    header: 'text-palette2 font-semibold text-lg',
    imgCont: `${styles.flexCenter} w-[7.6rem] h-[7.6rem] icon-bg3 rounded-full my-2`,
    text: 'text-palette2 text-sm',
    payCont: 'flex my-6 items-center',
    payInnerCont: 'flex justify-evenly ml-2',
    amountSpan: `${styles.flexCenter} w-[30px] h-[30px] px-1 bg-slate-400 text-sm`,
    amountBtnCont: 'flex flex-col justify-evenly  w-[30px] h-[30px] ml-3',
    amountBtn: 'w-[60%] cursor-pointer',
    payBtn: 'ml-6 bg-palette2 px-4 py-2 hover:opacity-50 rounded-sm text-sm font-semibold text-white'
}