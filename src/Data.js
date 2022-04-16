const data = [
  {
    question: "TCP/IP is?",
    answers: "protocol",
  },

  {
    question: "	What is the smallest unit of data in a computer?  ",
    answers: "bit",
  },
  {
    question: "	The brain of any computer system is? ",
    answers: "cpu",
  },
  {
    question:
      "A computer program that converts assembly language to machine language is?  ",
    answers: "assembler",
  },
  {
    question:
      "Which output device is used for translating information from a computer into pictorial form on paper?  ",
    answers: "plotter",
  },
  {
    question: "A common boundary between two systems is called?",
    answers: " interface",
  },
  {
    question:
      "A program that converts computer data into some code system other than the normal one is known as? ",
    answers: "encoder",
  },
  {
    question: "	The complete picture of data stored in database is known as? ",
    answers: "schema ",
  },
  {
    question:
      "	The personnel who deal with the computer & its management put together are called? ",
    answers: "humanware",
  },
  {
    question: "	Compression of digital data for efficient storage is? ",
    answers: "packing",
  },
  {
    question: "	The arranging of data in a logical sequence is called?  ",
    answers: "sorting",
  },
  {
    question: "1024 bytes represent a?  ",
    answers: "kb",
  },
  {
    question: "	The heart of any computer is the?  ",
    answers: "cpu",
  },
  {
    question:
      "	The process of writing computer instructions in a programming language is known as?  ",
    answers: "coding",
  },
  {
    question:
      "	A regular TV set can be hooked up to a computer so as to received computer signal instead of a television program. This hooking up is achieved with the help of a?  ",
    answers: "adapter",
  },
  {
    question:
      "Which part interprets program instructions and initiate control operations?   ",
    answers: "storage",
  },
  {
    question:
      "Which access method is used for obtaining a record from a cassette tape?   ",
    answers: "sequential",
  },
  {
    question: "	A single packet on a data link is known as? ",
    answers: "frame",
  },
  {
    question:
      "A hybrid computer uses a _____ to convert digital signals from a computer into analog signals?  ",
    answers: "modem",
  },
  {
    question:
      "A group of magnetic tapes, videos or terminals usually under the control of one master is?  ",
    answers: "cluster",
  },
  {
    question: "	To locate a data item for storage is?  ",
    answers: "fetch",
  },
  {
    question: "	Dot-matrix is a type of?  ",
    answers: "printer",
  },
  {
    question: "	The EAM device that does not use a control panel is the?   ",
    answers: "sorter",
  },
  {
    question:
      "	Which one of the following is termed a combination input-output device?   ",
    answers: "vdt",
  },
  {
    question: "A memory that holds micro programs is?   ",
    answers: "rom",
  },
  {
    question: "Which method is used to connect a remote computer?  ",
    answers: "dialup",
  },
  {
    question:
      "	Those microcomputers which have the same operating characteristics as the IBM microcomputers are called IBM?   ",
    answers: "clones",
  },
  {
    question:
      "A datum that indicates some important state in the content of input or output is?   ",
    answers: "sentinel",
  },
];

function PickRandomQuestion() {
  const random = Math.floor(Math.random() * data.length);
  return data[random];
}
export { data };
export default PickRandomQuestion;
