import Faker from 'faker';

export default new Array(1000).fill(true).map(() => ({
  id: Faker.datatype.uuid(),
  avatar: 'https://www.static.hellochange.cn/images/white_bear.gif',
  title: Faker.name.firstName(),
  content: Faker.company.companyName(),
}));
