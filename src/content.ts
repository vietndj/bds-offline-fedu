import { createContext, useContext, createElement } from "react";
import type { ReactNode } from "react";

export interface BlocksMeta {
  order: string[];
  hidden: string[];
  media: Record<string, any[]>;
  custom: Record<string, { title: string; body: string }>;
}

export interface SkillCard {
  n: string;
  title: string;
  desc: string;
  warn?: string;
  gif?: string;
  youtubeId?: string;
  aspectRatio?: string;
}
export interface Stage { n: string; title: string; sub?: string; desc?: string; gif?: string }
export interface ValueLine { label: string; price: string }

export interface PageContent {
  _v?: number;
  price: string;
  value: string;

  heroBadge: string;
  heroHeadline1: string;
  heroHeadline2: string;
  heroAccentLine: string;
  heroSub: string;
  heroCta: string;
  heroSubPrice?: string;
  heroVideoYoutubeId?: string;
  heroPoem?: string[];

  painLabel: string;
  painHeading: string;
  painQuote: string;
  painSub: string;
  pains: string[];
  painConclusion?: string;

  // ── Attention (3 cách gây chú ý) ──
  attentionLabel: string;
  attentionHeading: string;
  attentionPara: string;
  attentionItems: { icon: string; title: string; desc: string }[];

  // ── Rule 7-11-4 ──
  ruleLabel: string;
  ruleHeading: string;
  rulePara: string;
  ruleItems: { fail: string; why: string }[];
  ruleConclusion: string;

  cycleLabel: string;
  cycleHeading: string;
  cyclePara: string;
  cycleItems: { fail: string; why: string }[];
  
  discoveryLabel: string;
  discoveryHeading: string;
  discoverySub: string;
  discoveryItems: { title: string; desc: string }[];

  solutionLabel: string;
  solutionHeading: string;
  solutionSub: string;
  solutionItems: string[];

  skillsLabel: string;
  skillsHeading: string;
  skillCards: SkillCard[];

  midCtaHeading: string;
  midCtaSub: string;
  midCtaBtn: string;

  baLabel: string;
  baHeading: string;
  baSub: string;
  baBeforeMedia?: string;
  baAfterMedia?: string;
  beforeLabel: string;
  afterLabel: string;
  beforeItems: string[];
  afterItems: string[];

  roadmapLabel: string;
  roadmapHeading: string;
  roadmapPreviewHeading?: string;
  roadmapPreviewDesc?: string;
  roadmapIframeUrl?: string;
  roadmapChaptersHeading?: string;
  stages: Stage[];

  instructorLabel: string;
  instructorHeading: string;
  instructorInitials: string;
  instructorName: string;
  instructorTitle: string;
  instructorBio: string[];
  instructorInsight?: string;

  urgencyBar: string;
  ctaLabel: string;
  ctaHeading: string;
  ctaSub: string;
  countdownLabel: string;
  valueStackTitle: string;
  valueStack: ValueLine[];
  guarantee: string;

  footerBrand: string;
  footerDot: string;
  footerTagline: string;
  footerLinks: string[];
  bonusLabel: string;
  bonusHeading: string;
  bonusSub: string;
  bonusItems: { id: string; title: string; desc: string; audioDemo?: string; youtubeDemo?: string; gifDemo?: string }[];

  blocksMeta: BlocksMeta;
}

const CONTENT_SCHEMA_VERSION = 7;

export const DEFAULT_CONTENT: PageContent = {
  _v: 7,
  price: "50.000.000",
  value: "50.000.000",

  // ── Hero ──
  heroBadge: "Lớp Offline Thực Chiến Tại Hà Nội – Giới Hạn Chỉ 4 Học Viên/Lớp",
  heroHeadline1: "Video Marketing BĐS.",
  heroHeadline2: "Hệ Thống Hóa Kỹ Năng Quay Dựng\nBất Động Sản: Từ Thao Tác Mơ Hồ\nTrở Thành Kênh Kéo Khách VIP Tự Động",
  heroPoem: [
    "Không cần máy ảnh cồng kềnh,",
    "Quay BĐS đúng cách, xây kênh triệu view."
  ],
  heroAccentLine: "Làm Thế Nào Để Đóng Gói Sự Chuyên Nghiệp Thành Video \"Sang - Tín\" Và Thu Hút Đúng Tệp Khách Có Tiền Chỉ Trong 2 Ngày Cầm Tay Chỉ Việc",
  heroSub: "Ngay cả khi bạn mù công nghệ, lên hình hay vấp và chưa từng biết cách cắt ghép trên CapCut — khóa học này sẽ giúp bạn hệ thống hóa toàn bộ kỹ năng quay dựng video chuyên nghiệp cho ngành BĐS.",
  heroCta: "ĐĂNG KÝ NGAY LỚP HỌC 4 NGƯỜI",
  heroVideoYoutubeId: "",
  heroSubPrice: "(Học Offline 2 Ngày Cầm Tay Chỉ Việc — Giới Hạn 4 Học Viên/Lớp)",

  // ── Pain ──
  painLabel: "SỰ THẬT ĐẰNG SAU NHỮNG KÊNH BĐS \"TRIỆU VIEW NHƯNG KHÔNG RA SỐ\"",
  painHeading: "Bạn đội nắng quay hàng chục dự án, nhưng khách có tiền thật sự thì không thấy đâu?",
  painQuote: "\"Tôi đội nắng lội qua hàng chục dự án, hì hục cắt ghép CapCut rất mượt, đăng lên view cũng cao. Nhưng người comment toàn hỏi dạo, khách có tiền thật sự thì không thấy đâu vì video trông không đủ độ 'Tín'.\"",
  painSub: "Bất động sản là tài sản tiền tỷ (High-ticket). Khách hàng sẽ không bao giờ chuyển cọc chỉ vì bạn có một video lồng nhạc giật gân hay hiệu ứng chớp nhoáng. Họ xuống tiền vì Định vị Chuyên gia và Sự tin tưởng.",
  pains: [
    "❌ Bí ý tưởng kịch bản: Bấm máy lên không biết nói gì, quanh quẩn chỉ biết đọc thông số dự án một cách khô khan.",
    "❌ Lúng túng khi đi thực địa: Quay hàng chục bối cảnh, phòng khách, sa bàn nhưng góc máy rung lắc, khiến căn hộ tỷ đồng trông xập xệ như nhà cấp 4.",
    "❌ Không biết 'kỹ xảo' chốt sale: Rất muốn làm video dạng đứng thuyết trình, bên cạnh lồng ghép bản đồ quy hoạch chuyển động nhưng không biết làm.",
    "❌ Lên hình thiếu tự tin: Ốm yếu, vấp váp, ánh mắt láo liên làm mất đi phong cách 'Quiet Luxury' (Sang trọng kín đáo) thu hút giới tinh hoa.",
    "❌ Tốn thời gian vô ích: Bỏ ra cả ngày loay hoay cắt ghép trên điện thoại nhưng video xuất ra bị mờ, chữ bị lỗi."
  ],
  painConclusion: "Thay vì một kênh nội dung thu hút đúng tệp người có tiền, bạn đang kẹt trong vòng lặp sản xuất nội dung máy móc. Video review đăng lên trôi tuột trên feed khán giả mà không đọng lại bất kỳ một tin nhắn hỏi giá nào.",

  // ── Attention ──
  attentionLabel: "",
  attentionHeading: "",
  attentionPara: "",
  attentionItems: [],

  // ── Rule ──
  ruleLabel: "",
  ruleHeading: "",
  rulePara: "",
  ruleItems: [],
  ruleConclusion: "",

  // ── Cycle ──
  cycleLabel: "VÒNG LẶP SAI LẦM",
  cycleHeading: "Vòng Lặp Sai Lầm Của Sự \"Bắt Chước Mù Quáng\"",
  cyclePara: "Tôi đã thấy hàng ngàn môi giới bế tắc vì đi theo lối mòn này:",
  cycleItems: [
    { fail: "Bắt chước các trend nhảy múa, tấu hài", why: "Lên view rất nhanh, nhưng định vị hình ảnh bị 'rẻ tiền', khách hàng 40-55 tuổi sẽ không bao giờ giao tài sản cho bạn." },
    { fail: "Làm video dạng Slide ảnh ghép nhạc lười biếng", why: "Không có khuôn mặt của bạn xuất hiện, khách hàng không biết bạn là ai để đặt niềm tin." },
    { fail: "Mua khóa học dạy phần mềm chung chung", why: "Họ dạy bạn làm hiệu ứng giật nháy xập xình, trong khi BĐS cần sự chân thực, gọn gàng và âm thanh sạch sẽ." },
    { fail: "Cố nhồi nhét mọi tiện ích dự án vào 1 video", why: "Người xem bị quá tải thông tin, trong khi bạn lại thiếu câu Hook (mở đầu) để giữ chân họ ở 3 giây đầu tiên." }
  ],

  // ── Discovery ──
  discoveryLabel: "SỰ THẬT THEN CHỐT",
  discoveryHeading: "Khách Hàng Xuống Tiền Vì Sự Tin Tưởng, Không Phải Vì Hiệu Ứng Bắt Mắt",
  discoverySub: "Áp dụng tư duy logic hệ thống (15 năm kinh nghiệm) vào BĐS, tôi nhận ra: Một kênh BĐS thành công là một kênh được 'lập trình' để tự động hóa lòng tin.",
  discoveryItems: [
    { title: "Nội dung tạo phễu", desc: "Kịch bản phải đi từ 'Biết (Kiến thức) ➔ Bàn (Chuyện nghề) ➔ Bán (Sản phẩm)'." },
    { title: "Sức mạnh của 3 giây đầu (Hook)", desc: "Nếu mở đầu không chạm đúng 'nỗi đau' (Vd: Pháp lý, Lãi suất, Vị trí), khách VIP sẽ lướt qua ngay." },
    { title: "Cảnh trám (B-roll) rõ nét", desc: "Góc quay chuẩn, chống rung sẽ tôn lên vẻ đẹp dự án, thay thế vạn lời quảng cáo." },
    { title: "Kỹ xảo minh họa trực quan (PIP)", desc: "Vừa nói, vừa hiển thị slide/bản đồ chạy góc màn hình chính là 'Vũ khí chốt sale' sắc bén nhất của môi giới thời đại mới." }
  ],

  // ── Solution ──
  solutionLabel: "GIẢI PHÁP",
  solutionHeading: "Đó là lý do tôi đóng gói: Khóa Offline \"Cầm Tay Chỉ Việc\" — Dành Riêng Cho Nhóm 4 Người.",
  solutionSub: "Tại sao lại là 4 người? Vì BĐS là ngành cần thực chiến. Tôi không thể dạy hội trường 50 người làm sao để setup ánh sáng cho chuẩn 'Sang', làm sao để hết vấp khi đọc kịch bản. Với quy mô 4 người, bạn sẽ được sửa từng câu nói, từng lỗi ánh sáng, từng cú lia máy quay ngay tại lớp.",
  solutionItems: [
    "❌ Bí kịch bản ➞ ✅ Lấy ý tưởng dễ dàng từ chính công việc tư vấn, chốt sale hằng ngày",
    "❌ Nói vấp váp, ngập ngừng ➞ ✅ Lên hình dõng dạc, quay 1-shot nhờ App nhắc chữ (Teleprompter)",
    "❌ Quay dự án rung lắc, lộn xộn ➞ ✅ Tự tin lia góc máy điện ảnh, tôn lên tối đa giá trị sản phẩm tiền tỷ",
    "❌ Video nhàm chán từ đầu đến cuối ➞ ✅ Bậc thầy dùng CapCut chèn bản đồ, sa bàn, slide động cực kỳ sinh động"
  ],

  // ── Skills ──
  skillsLabel: "SỰ KHÁC BIỆT GIỮA KÊNH CHUYỂN ĐỔI VÀ KÊNH VÔ NGHĨA",
  skillsHeading: "4 Kỹ Năng Bắt Buộc Môi Giới Phải Có (Mà Các Khóa Dạy Bấm Nút Không Dạy Bạn)",
  skillCards: [
    {
      n: "01",
      title: "Thiết lập Phễu nội dung & Kịch bản logic",
      desc: "Cấu trúc 3 dạng kịch bản sống còn: Chia sẻ kiến thức, Chuyện nghề, và Review dự án. Khả năng cài cắm Hook và Call-to-action (CTA).",
      warn: "Thiếu nó, kênh của bạn sẽ lan man, rỗng tuếch và không thể giữ chân người có tiền."
    },
    {
      n: "02",
      title: "Setup bối cảnh tĩnh & Phong thái chuyên gia (Talking Head)",
      desc: "Kỹ thuật dùng App nhắc chữ (Teleprompter) để không phải học vẹt. Luyện khẩu hình, ánh sáng tạo sự TÍN chuẩn chuyên gia.",
      warn: "Thiếu nó, sự lúng túng trên video sẽ khiến khách hàng nghi ngờ năng lực của bạn."
    },
    {
      n: "03",
      title: "Kỹ thuật quay thực địa & Cảnh trám (B-roll)",
      desc: "Bộ quy tắc lia máy điện thoại chống rung, lấy góc siêu rộng để khoe trọn vẹn kiến trúc, tiện ích nội khu.",
      warn: "Thiếu nó, căn biệt thự triệu đô qua tay bạn quay cũng xập xệ như nhà cấp 4."
    },
    {
      n: "04",
      title: "Kỹ xảo hình ảnh minh họa chuyên sâu (PIP trên CapCut)",
      desc: "Khả năng lồng ghép bản đồ quy hoạch, sa bàn, mặt bằng chạy động ngay khi bạn đang thuyết trình.",
      warn: "Thiếu nó, khách sẽ rất khó hình dung vị trí và mất đi cảm xúc muốn đi xem nhà thực tế."
    }
  ],

  // ── Mid CTA ──
  midCtaHeading: "Đừng để năng lực tư vấn tuyệt vời của bạn bị lãng phí chỉ vì thiếu công cụ lan tỏa.",
  midCtaSub: "Trang bị vũ khí sắc bén nhất cho nghề BĐS của bạn ngay hôm nay. Giới hạn 4 slot mỗi lớp.",
  midCtaBtn: "LIÊN HỆ TƯ VẤN QUA ZALO",

  // ── Before & After ──
  baLabel: "TRƯỚC VÀ SAU KHÓA HỌC",
  baHeading: "Sự thay đổi sau 2 ngày Offline cầm tay chỉ việc:",
  baSub: "",
  baBeforeMedia: "",
  baAfterMedia: "",
  beforeLabel: "❌ TRƯỚC KHI THAM GIA",
  afterLabel: "✅ SAU KHI HOÀN THÀNH",
  beforeItems: [
    "Bấm máy trong sự mơ hồ, vắt óc 2 tiếng không nặn ra được kịch bản",
    "Nói vấp váp, ngập ngừng, mắt đảo liên tục vì phải học vẹt kịch bản",
    "Quay bối cảnh dự án rung lắc, lộn xộn, góc máy kém sang",
    "Video nhàm chán, chỉ có mặt người nói từ đầu đến cuối",
    "Khán giả lướt qua nhanh chóng, hoặc toàn comment dạo"
  ],
  afterItems: [
    "Lấy ý tưởng dễ dàng từ chính công việc tư vấn, chốt sale hằng ngày",
    "Lên hình dõng dạc, bấm máy 1 shot là ăn ngay nhờ nhắc chữ",
    "Tự tin lia góc máy điện ảnh, tôn lên tối đa giá trị sản phẩm tiền tỷ",
    "Bậc thầy dùng CapCut chèn bản đồ, sa bàn, slide động cực kỳ sinh động",
    "Nhắm đúng tệp khách nét, khách chủ động nhắn tin nhờ uy tín cá nhân"
  ],

  // ── Roadmap ──
  roadmapLabel: "LỘ TRÌNH ĐÀO TẠO 2 NGÀY THỰC CHIẾN",
  roadmapHeading: "Cầm tay chỉ việc — Học xong làm ra ít nhất 2 video hoàn chỉnh",
  roadmapPreviewHeading: "",
  roadmapPreviewDesc: "",
  roadmapIframeUrl: "",
  roadmapChaptersHeading: "Lịch trình chi tiết 2 ngày Offline:",
  stages: [
    {
      n: "Ngày 1 — Sáng",
      title: "Mỏ Vàng Kịch Bản & Tâm Lý Khách Hàng",
      desc: "Định hình phong cách BĐS 'Quiet Luxury'. Làm quen giao diện CapCut cơ bản. Cấu trúc 3 dạng kịch bản chuyển đổi & Công thức Hook 3 giây đầu.",
      sub: "Thực hành: Tự viết 1 kịch bản ngay tại lớp. Giảng viên sửa trực tiếp."
    },
    {
      n: "Ngày 1 — Chiều",
      title: "Setup Bối Cảnh Tĩnh & Làm Chủ Ống Kính",
      desc: "Setup đèn, âm thanh tại bối cảnh văn phòng/studio đơn giản. Cách sử dụng App nhắc chữ (Teleprompter) để quay 1-shot không vấp.",
      sub: "Thực hành: Bấm máy quay trực tiếp phần Talking Head cho kịch bản vừa viết."
    },
    {
      n: "Ngày 2 — Sáng",
      title: "Quay Thực Địa Dự Án & Cảnh Trám (B-Roll)",
      desc: "Sở hữu 7 góc máy 'ăn tiền' khi quay căn hộ, nhà phố, sa bàn. Kỹ thuật lia máy chống rung, lấy nét và phơi sáng bằng điện thoại.",
      sub: "Thực hành: Bắt cặp di chuyển ra khuôn viên thực hành quay bối cảnh (cảnh trám) theo Checklist."
    },
    {
      n: "Ngày 2 — Chiều",
      title: "Hậu Kỳ CapCut Đỉnh Cao & Đóng Gói",
      desc: "Làm sạch video: Lọc tạp âm, chèn nhạc nền 'sang trọng', tạo phụ đề tự động. TUYỆT CHIÊU BĐS: Kỹ thuật chèn Lớp phủ (PIP) — Đưa bản đồ quy hoạch, hình ảnh mặt bằng động vào bên cạnh video người nói.",
      sub: "Thực hành: Hoàn thiện render 1 Video Kiến thức & 1 Video Review dự án hoàn chỉnh."
    }
  ],

  // ── Instructor ──
  instructorLabel: "GIẢNG VIÊN",
  instructorHeading: "Video BĐS không phải nghệ thuật cảm tính\nnó là một Công thức hệ thống",
  instructorInitials: "NĐV",
  instructorName: "Nguyễn Đức Việt",
  instructorTitle: "Kỹ sư Công nghệ Phần mềm (ĐH Bách Khoa). 15 năm Giảng viên Mỹ thuật đa phương tiện tại FPT Arena.",
  instructorBio: [
    "Tôi mang tư duy logic của một kỹ sư áp dụng vào việc xây dựng Video Marketing. Với tôi, làm video BĐS không phải là nghệ thuật cảm tính, nó là một Công thức hệ thống có tỷ lệ chuyển đổi.",
    "Hiểu sâu sắc tính đặc thù BĐS: Bạn không cần hiệu ứng nhảy nhót giải trí. Bạn cần một khung hình chỉnh chu, âm thanh sạch sẽ, nhịp điệu chắc chắn và bản đồ minh họa sắc nét để truyền tải dữ liệu triệu đô.",
    "Vì sao tôi giới hạn 4 người? Trong ngành BĐS, kỹ năng ăn nói, ánh mắt và kỹ thuật quay dựng bắt buộc phải được 'cầm tay chỉ việc'. Tôi không bán khóa học nhồi nhét lý thuyết. Tôi đồng hành để bạn ra được sản phẩm thực tế!"
  ],

  // ── Bonus ──
  bonusLabel: "ĐÓNG GÓI TRỌN BỘ",
  bonusHeading: "Làm Video Ngay Sau Khi Rời Khỏi Lớp",
  bonusSub: "Tham gia khóa học Offline, bạn nhận ngay 'Vũ khí thực chiến' được in ấn và chuẩn hóa sẵn thành các bản cứng trao tay.",
  bonusItems: [
    {
      id: "01",
      title: 'Cuốn sổ tay "50 Câu Hook Thôi Miên BĐS"',
      desc: "Bí ý tưởng? Chỉ cần lật sổ, chọn 1 câu điền vào chỗ trống và bấm máy. Được in ấn chuẩn và trao tay tại lớp."
    },
    {
      id: "02",
      title: 'Sơ Đồ "7 Góc Quay Dự Án Tiêu Chuẩn"',
      desc: "Cứ đến dự án là dở sơ đồ ra quay, đảm bảo không có góc chết. Áp dụng cho căn hộ, nhà phố, biệt thự và sa bàn."
    },
    {
      id: "03",
      title: "Checklist 25 Điểm Chạm Khi Đi Quay Thực Địa",
      desc: "Cầm bảng này đi xem nhà mẫu, cam kết không bao giờ quên quay các tiện ích quan trọng."
    },
    {
      id: "04",
      title: "Template Ma Trận Lịch Đăng Bài 30 Ngày",
      desc: "Biết chính xác ngày nào đăng chia sẻ, ngày nào đăng bán hàng để TikTok đẩy kênh. Áp dụng đặc thù BĐS."
    },
    {
      id: "05",
      title: "Hệ Thống Video Bổ Trợ Trực Tuyến (Truy Cập Trọn Đời)",
      desc: "Trở về nhà nếu quên thao tác CapCut, có thể mở video xem lại từng nút bấm. Cập nhật liên tục."
    }
  ],

  // ── Final CTA ──
  urgencyBar: "⚠ LỚP OFFLINE GIỚI HẠN 4 SLOT — LIÊN HỆ NGAY ĐỂ GIỮ CHỖ",
  ctaLabel: "// BƯỚC CUỐI CÙNG",
  ctaHeading: "Thị Trường Đang Ấm Lên — Đừng Để Đồng Nghiệp Bỏ Xa Bạn Trên Mặt Trận Số",
  ctaSub: "Trong khi bạn còn đang chần chừ, những môi giới khác đã biết cách dùng video để chốt khách. Hãy trang bị vũ khí sắc bén nhất cho nghề BĐS của bạn ngay hôm nay. Đừng để năng lực tư vấn tuyệt vời của bạn bị lãng phí chỉ vì thiếu công cụ lan tỏa.",
  countdownLabel: "",
  valueStackTitle: "XÁC NHẬN ĐĂNG KÝ: Khóa Học Offline 2 Ngày Video BĐS",
  valueStack: [
    { label: "Khóa Offline 2 Ngày Cầm Tay Chỉ Việc (4 Học Viên/Lớp)", price: "50.000.000 VNĐ" },
    { label: "Bộ 5 Quà Tặng Tối Ưu Quy Trình (Bản Cứng Trao Tay)", price: "Miễn phí" }
  ],
  guarantee: "Lớp học sẽ tự động đóng Form khi đủ 4 người đăng ký trước để đảm bảo chất lượng kèm 1-1.",

  // ── Footer ──
  footerBrand: "VIET",
  footerDot: ".",
  footerTagline: "\"Video BĐS không phải ngẫu nhiên,\nTư duy đi trước, kiếm tiền mới nhanh!\"",
  footerLinks: [],
  footerCopyright: "COPYRIGHT 2024 | NGUYỄN ĐỨC VIỆT (TOPEXPERT / FEDU.VN)",

  blocksMeta: {
    order: ["hero", "pain", "cycle", "skills", "midCta", "before-after", "roadmap", "instructor", "bonus", "cta", "footer"],
    hidden: ["attention", "rule", "discovery", "solutions", "solution"],
    media: {},
    custom: {},
  },
};

export const ContentCtx = createContext<PageContent>(DEFAULT_CONTENT);

export function useContent(): PageContent {
  return useContext(ContentCtx);
}

export function ContentProvider({ children }: { children: ReactNode }) {
  return createElement(ContentCtx.Provider, { value: DEFAULT_CONTENT }, children);
}
