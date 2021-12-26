import React, { useMemo } from "react";
import Select from "react-select";

function MoodDropdown(props) {
  // 관심분위기 select option
  const moodOptions = useMemo(
    () => [
      { value: "mood1", label: "Mood1" },
      { value: "mood2", label: "Mood2" },
      { value: "mood3", label: "Mood3" },
      { value: "mood4", label: "Mood4" },
      { value: "mood5", label: "Mood5" },
    ],
    []
  );

  return (
    <div>
      <Select options={moodOptions} defaultValue="분위기를 선택하세요." />
    </div>
  );
}

export default MoodDropdown;
