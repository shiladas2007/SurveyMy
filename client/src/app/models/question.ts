// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+

//Brief Description: Questionare of the survey will be stored in the Question table.

import { Answer } from "./answer";
export class Question {
  // tslint:disable-next-line: variable-name
  _id: string;
  question: string;
  sectionN: number;
  sectionHeader: string;
  questionType = 1; //1 for mcq, 2 for text, 3 for key tab, 4=missing q-2mcq, 5=dropdown, 6=image-mcq,7=image-text
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  image: string;
  dynamicQ: string;
  list: [];
}
