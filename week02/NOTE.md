## 学习笔记

终结符：

- Number
- \+ \- \* / ( )

非终结符：

- MultiplicativeExpression，简称 ME
- AddtiveExpression，简称 AE
- ParenthesisExpression, 简称 PE

BNF：

- <ME>:: = <Number> | <ME> "\*" <ME> | <ME> "/" <ME> |
- <AE>:: = <ME> | <AE> + <ME> | <AE> - <ME> |
- <PE>:: = <AE> | "(" <PE> ")" | <PE> "\*"<PE> | <PE> "/" <PE> | <PE> "+" <PE> | <PE> "-" <PE> |

## 总结

本周课程的概念比较多，基础薄弱的我学起来很是吃力，繁忙的工作让人窒息。
