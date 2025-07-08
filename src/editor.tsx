interface EditorProps {
  delivery: string;
  onDeliveryChange: (value: string) => void;
}

function Editor({ delivery, onDeliveryChange }: EditorProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold">Enter your delivery data here</p>
      <textarea
        className="textarea textarea-primary w-full h-64 p-4  border border-gray-300 rounded-lg"
        placeholder='{"deliveries": [[1,3],[2,4]], "path": [1,4,2,3]}'
        aria-placeholder="Enter your delivery data here..."
        value={delivery}
        onChange={(e) => onDeliveryChange(e.target.value)}
      ></textarea>
    </div>
  );
}

export default Editor;
