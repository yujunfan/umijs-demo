/** 分割查询字符 */
const cutSearchParam = (field, value) => {
  const fields = field.replace(/@/, '.').split('_');
  if (Array.isArray(value)) {
    return {
      fieldName: fields[0],
      operate: fields[1],
      value: value[0].format('YYYY-MM-DD 00:00'),
      value1: value[1].format('YYYY-MM-DD 23:59'),
    };
  }
  return {
    fieldName: fields[0],
    operate: fields[1],
    value: value,
  };
};
/** 编辑查询的字段 */
export const ExitSearchParams = (param) => {
  let searchParams = [];
  Object.keys(param).forEach((item) => {
    if (param[item] || param[item] === 0) {
      searchParams.push(cutSearchParam(item, param[item]));
    }
  });
  return searchParams;
};
