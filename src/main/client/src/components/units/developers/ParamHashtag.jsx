import { useState } from "react";
import { useStateValue } from "store/StateProvider";
import { Section, Title, TagBox, Tag } from "./ParamHashtag.style";

function ParamHashtag() {
  const [initialState, dispatch] = useStateValue(); // eslint-disable-line no-unused-vars
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);
  const [active7, setActive7] = useState(false);
  const [active8, setActive8] = useState(false);
  const [active9, setActive9] = useState(false);
  const [active10, setActive10] = useState(false);
  const [active11, setActive11] = useState(false);
  const [active12, setActive12] = useState(false);

  const SetTag = (active, setActive, name) => {
    if (!active) {
      dispatch({
        type: `Set${name}`,
        item: name,
        name: name,
      });
      setActive(true);
    } else {
      dispatch({
        type: `Del${name}`,
        name: name,
      });
      setActive(false);
    }
  };

  return (
    <Section>
      <Title>
        아래 관심있는 #해시태그를 선택하시면, 해당 스킬셋을 가진 개발자의
        프로필과 이력서를 확인하실 수 있습니다.
      </Title>
      <TagBox>
        <Tag
          style={active1 ? { backgroundColor: "lightgreen" } : {}}
          onClick={() => SetTag(active1, setActive1, `Publishing`)}
        >
          Publishing
        </Tag>
        <Tag
          style={active2 ? { backgroundColor: "lightgreen" } : {}}
          onClick={() => SetTag(active2, setActive2, `Flutter`)}
        >
          Flutter
        </Tag>
        <Tag
          style={active3 ? { backgroundColor: "lightgreen" } : {}}
          onClick={() => SetTag(active3, setActive3, `Dart`)}
        >
          Dart
        </Tag>
        <Tag
          style={active4 ? { backgroundColor: "lightgreen" } : {}}
          onClick={() => SetTag(active4, setActive4, `React.js`)}
        >
          React.js
        </Tag>
        <Tag
          style={active5 ? { backgroundColor: "lightgreen" } : {}}
          onClick={() => SetTag(active5, setActive5, `Node.js`)}
        >
          Node.js
        </Tag>
        <Tag
          style={active6 ? { backgroundColor: "lightgreen" } : {}}
          onClick={() => SetTag(active6, setActive6, `Django`)}
        >
          Django
        </Tag>
      </TagBox>
      <TagBox>
        <Tag
          style={active7 ? { backgroundColor: "lightgreen" } : {}}
          onClick={() => SetTag(active7, setActive7, `Thymeleaf`)}
        >
          Thymeleaf
        </Tag>
        <Tag
          style={active8 ? { backgroundColor: "lightgreen" } : {}}
          onClick={() => SetTag(active8, setActive8, `Spring`)}
        >
          Spring
        </Tag>
        <Tag
          style={active9 ? { backgroundColor: "lightgreen" } : {}}
          onClick={() => SetTag(active9, setActive9, `Docker`)}
        >
          Docker
        </Tag>
        <Tag
          style={active10 ? { backgroundColor: "lightgreen" } : {}}
          onClick={() => SetTag(active10, setActive10, `Kotlin`)}
        >
          Kotlin
        </Tag>
        <Tag
          style={active11 ? { backgroundColor: "lightgreen" } : {}}
          onClick={() => SetTag(active11, setActive11, `Angular.js`)}
        >
          Angular.js
        </Tag>
        <Tag
          style={active12 ? { backgroundColor: "lightgreen" } : {}}
          onClick={() => SetTag(active12, setActive12, `Swift`)}
        >
          Swift
        </Tag>
      </TagBox>
      <textarea value={JSON.stringify(initialState, null, 5)}
          rows="45" cols="90" />
    </Section>
  );
}

export default ParamHashtag;
