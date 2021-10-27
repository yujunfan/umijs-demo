// export const dva = {
//     config: {
//       onError(err:any) {
//         err.preventDefault();
//       },
//     },
//   };
// 会自动先进入这里
export function render(oldRender: any) {
  oldRender();
}
