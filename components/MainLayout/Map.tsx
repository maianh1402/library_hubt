const Map = () => {
  return (
    <div className="h-[100vh]">
      <h1 className="text-center my-[60px] relative  text-[40px] mb-[10px] pb-[10px]">
        Bản đồ
      </h1>
      <div className="mx-[100px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8195484274365!2d105.87552541478405!3d20.999869394140166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aeaa17c35b81%3A0x79d8becf2f06f8dc!2sHanoi%20University%20of%20Business%20and%20Technology!5e0!3m2!1sen!2s!4v1664460416572!5m2!1sen!2s"
          width="100%"
          height="550"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className=""
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
