import { Card, CardHeader, Typography } from "@material-tailwind/react";

export const StyleMatrix = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Card className="w-24 h-10 bg-transparent shadow-none border-solid border rounded-none rounded-tl-md">
          <Typography color="white" className="text-sm">
            Reliable
          </Typography>
        </Card>
        <Card className="w-24 h-10 bg-transparent shadow-none border-solid border rounded-none">
          <Typography color="white" className="text-sm">
            Secure
          </Typography>
        </Card>
        <Card className="w-24 h-10 bg-transparent shadow-none border-solid border rounded-none rounded-tr-md">
          <Typography color="white" className="text-sm">
            Etherium
          </Typography>
        </Card>
      </div>
      <div className="flex justify-center items-center">
        <Card className="w-24 h-10 bg-transparent shadow-none border-solid border rounded-none rounded-bl-md">
          <Typography color="white" className="text-sm">
            Web 3.0
          </Typography>
        </Card>
        <Card className="w-24 h-10 bg-transparent shadow-none border-solid border rounded-none ">
          <Typography color="white" className="text-sm">
            Low Fees
          </Typography>
        </Card>
        <Card className="w-24 h-10 bg-transparent shadow-none border-solid border rounded-none rounded-br-md">
          <Typography color="white" className="text-sm">
            Web 3.0
          </Typography>
        </Card>
      </div>
    </>
  );
};

export const Welcome = () => {
  return (
    <>
      <div className="md:flex bg-gradient-to-t from-[#b44948]">
        <div className="w-full md:justify-center md:items-center md:h-[90vh] text-center justify-center items-center flex flex-col h-96 ">
          <Typography className=" text-white text-7xl ">
            Welcome to my Web<a className="text-white">3</a>{" "}
            <p className=" text-white">Application</p>
          </Typography>
          <Typography className=" text-white text-xl p-5">
            Using this application you can transfer cryptocurrency between
            accounts
          </Typography>
          <StyleMatrix />
        </div>
        <div className="md:flex-col flex md:col-1 w-full justify-center items-center md:h-[90vh]">
          <Card className="w-96 h-96 bg-gradient-to-b from-[#b44948] to-gray-900 md:m-0 m-3">
            <CardHeader className="bg-[#b44948] flex items-center justify-center h-20">
              <Typography color="white" variant="h4">
                Crypto Transfer
              </Typography>
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  );
};
