USE [LifeBlog]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](500) NOT NULL,
	[Type] [nvarchar](100) NULL,
	[Parent] [int] NULL,
	[Url] [nvarchar](500) NULL,
	[Order] [int] NULL,
	[IsShow] [bit] NULL,
	[IsDelete] [bit] NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [int] NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SEO]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SEO](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Category] [int] NULL,
	[News] [int] NULL,
	[Url] [nvarchar](500) NULL,
	[Description] [nvarchar](max) NULL,
	[Title] [nvarchar](500) NULL,
	[Keywords] [nvarchar](500) NULL,
	[Tags] [nvarchar](500) NULL,
	[H1] [nvarchar](500) NULL,
	[H2] [nvarchar](500) NULL,
	[H3] [nvarchar](500) NULL,
	[H4] [nvarchar](500) NULL,
	[H5] [nvarchar](500) NULL,
	[H6] [nvarchar](500) NULL,
 CONSTRAINT [PK_SEO] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  View [dbo].[CategorySeo]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE view [dbo].[CategorySeo] as
select Category.*,SEO.ID as SEOID, SEO.Category,SEO.Description, SEO.H1,SEO.H2,SEO.H3,SEO.H4,SEO.H5,SEO.H6,SEO.Keywords,SEO.News,SEO.Tags,SEO.Title,SEO.Url as SEOUrl from Category, SEO
where Category.IsDelete = 0 and Category.ID = SEO.Category
GO
/****** Object:  Table [dbo].[News]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[News](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](250) NULL,
	[Introduction] [nvarchar](max) NULL,
	[Content] [nvarchar](max) NULL,
	[MainImg] [nvarchar](max) NULL,
	[SubImg] [nvarchar](max) NULL,
	[CreatedBy] [int] NULL,
	[Views] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[IsPopular] [bit] NULL,
	[IsDelete] [bit] NULL,
	[IsShow] [bit] NULL,
	[IsApproved] [bit] NULL,
 CONSTRAINT [PK_News] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  View [dbo].[NewsSeo]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE view [dbo].[NewsSeo] as
select News.*,SEO.ID as SEOID, SEO.Category,SEO.Description, SEO.H1,SEO.H2,SEO.H3,SEO.H4,SEO.H5,SEO.H6,SEO.Keywords,SEO.News,SEO.Tags,SEO.Title as SEOTitle,SEO.Url from News, SEO
where News.IsDelete = 0 and News.ID = SEO.News
GO
/****** Object:  Table [dbo].[Comment]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Comment](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Content] [nvarchar](max) NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [int] NULL,
	[News] [int] NULL,
	[Parent] [int] NULL,
	[IsDelete] [bit] NULL,
	[IsShow] [bit] NULL,
	[IsApproved] [bit] NULL,
 CONSTRAINT [PK_Comment] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Essay]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Essay](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](250) NULL,
	[Topic] [int] NULL,
	[Grammars] [nvarchar](250) NULL,
	[Vocabularies] [nvarchar](250) NULL,
	[Content] [nvarchar](max) NULL,
	[Correct] [nvarchar](max) NULL,
	[VMeaning] [nvarchar](max) NULL,
	[IsShow] [bit] NULL,
	[IsDelete] [bit] NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [int] NULL,
	[IsApproved] [bit] NULL,
 CONSTRAINT [PK_Essay] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Feedback]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Feedback](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Vocabulary] [int] NULL,
	[Grammar] [int] NULL,
	[Sentence] [int] NULL,
	[Essay] [int] NULL,
	[Content] [nvarchar](max) NULL,
	[IsDelete] [bit] NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [int] NULL,
 CONSTRAINT [PK_Feedback] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Grammar]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Grammar](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Content] [nvarchar](max) NULL,
	[Key] [nvarchar](500) NULL,
	[Structure] [nvarchar](max) NULL,
	[Example] [nvarchar](max) NULL,
	[IsShow] [bit] NULL,
	[IsDelete] [bit] NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [datetime] NULL,
	[IsApproved] [bit] NULL,
 CONSTRAINT [PK_Grammar] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[IrregularWord]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IrregularWord](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Word] [nvarchar](50) NULL,
	[V1] [nvarchar](50) NULL,
	[V2] [nvarchar](50) NULL,
	[V3] [nvarchar](50) NULL,
	[Vocabulary] [int] NULL,
	[IsShow] [bit] NULL,
	[IsDelete] [bit] NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [datetime] NULL,
 CONSTRAINT [PK_IrregularWord] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Listening]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Listening](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Link] [nvarchar](max) NULL,
	[Type] [nvarchar](50) NULL,
	[Sub] [nvarchar](max) NULL,
	[FileName] [nvarchar](max) NULL,
	[IsShow] [bit] NULL,
	[IsDelete] [bit] NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [int] NULL,
	[IsApproved] [bit] NULL,
 CONSTRAINT [PK_Listening] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Media]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Media](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Image] [nvarchar](max) NULL,
	[Type] [nvarchar](50) NULL,
	[Video] [nvarchar](max) NULL,
	[News] [int] NULL,
	[Quote] [nvarchar](500) NULL,
	[Content] [nvarchar](max) NULL,
	[Url] [nvarchar](500) NULL,
	[IsShow] [bit] NULL,
	[IsDelete] [bit] NULL,
	[Audio] [nvarchar](max) NULL,
 CONSTRAINT [PK_Media] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sentences]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sentences](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Sentence] [nvarchar](500) NULL,
	[Topic] [int] NULL,
	[ImportantWord] [nvarchar](50) NULL,
	[VMeaning] [nvarchar](500) NULL,
	[IsShow] [bit] NULL,
	[IsDelete] [bit] NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [int] NULL,
 CONSTRAINT [PK_Sentences] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Topic]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Topic](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](200) NULL,
	[IsShow] [bit] NULL,
	[IsDelete] [bit] NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [int] NULL,
 CONSTRAINT [PK_Topic] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](100) NULL,
	[Password] [nvarchar](100) NULL,
	[Email] [nvarchar](100) NULL,
	[Address] [nvarchar](250) NULL,
	[Role] [nvarchar](100) NULL,
	[Avatar] [nvarchar](max) NULL,
	[IsActive] [bit] NULL,
	[IsDelete] [bit] NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Vocabulary]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Vocabulary](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Word] [nvarchar](50) NULL,
	[Pronounce] [nvarchar](50) NULL,
	[EMeaning] [nvarchar](250) NULL,
	[VMeaning] [nvarchar](250) NULL,
	[Example] [nvarchar](500) NULL,
	[Img] [nvarchar](max) NULL,
	[Synonymous] [nvarchar](250) NULL,
	[Family] [nvarchar](500) NULL,
	[IsShow] [bit] NULL,
	[IsDelete] [bit] NULL,
	[Type] [nvarchar](10) NULL,
	[Topic] [int] NULL,
	[IsApproved] [bit] NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [int] NULL,
 CONSTRAINT [PK_Vocabulary] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Webconfig]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Webconfig](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Facebook] [nvarchar](max) NULL,
	[Instagram] [nvarchar](max) NULL,
	[Twiter] [nvarchar](max) NULL,
	[GooglePlus] [nvarchar](max) NULL,
	[Phone] [nvarchar](20) NULL,
	[Mail] [nvarchar](100) NULL,
	[Fax] [nvarchar](100) NULL,
	[Office] [nvarchar](50) NULL,
	[Map] [nvarchar](max) NULL,
 CONSTRAINT [PK_Webconfig] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Comment]  WITH CHECK ADD  CONSTRAINT [FK_Comment_News] FOREIGN KEY([News])
REFERENCES [dbo].[News] ([ID])
GO
ALTER TABLE [dbo].[Comment] CHECK CONSTRAINT [FK_Comment_News]
GO
ALTER TABLE [dbo].[Comment]  WITH CHECK ADD  CONSTRAINT [FK_Comment_Users] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[Users] ([ID])
GO
ALTER TABLE [dbo].[Comment] CHECK CONSTRAINT [FK_Comment_Users]
GO
ALTER TABLE [dbo].[Essay]  WITH CHECK ADD  CONSTRAINT [FK_Essay_Topic] FOREIGN KEY([Topic])
REFERENCES [dbo].[Topic] ([ID])
GO
ALTER TABLE [dbo].[Essay] CHECK CONSTRAINT [FK_Essay_Topic]
GO
ALTER TABLE [dbo].[Feedback]  WITH CHECK ADD  CONSTRAINT [FK_Feedback_Essay] FOREIGN KEY([Essay])
REFERENCES [dbo].[Essay] ([ID])
GO
ALTER TABLE [dbo].[Feedback] CHECK CONSTRAINT [FK_Feedback_Essay]
GO
ALTER TABLE [dbo].[Feedback]  WITH CHECK ADD  CONSTRAINT [FK_Feedback_Grammar] FOREIGN KEY([Grammar])
REFERENCES [dbo].[Grammar] ([ID])
GO
ALTER TABLE [dbo].[Feedback] CHECK CONSTRAINT [FK_Feedback_Grammar]
GO
ALTER TABLE [dbo].[Feedback]  WITH CHECK ADD  CONSTRAINT [FK_Feedback_Sentences] FOREIGN KEY([Sentence])
REFERENCES [dbo].[Sentences] ([ID])
GO
ALTER TABLE [dbo].[Feedback] CHECK CONSTRAINT [FK_Feedback_Sentences]
GO
ALTER TABLE [dbo].[Feedback]  WITH CHECK ADD  CONSTRAINT [FK_Feedback_Vocabulary] FOREIGN KEY([Vocabulary])
REFERENCES [dbo].[Vocabulary] ([ID])
GO
ALTER TABLE [dbo].[Feedback] CHECK CONSTRAINT [FK_Feedback_Vocabulary]
GO
ALTER TABLE [dbo].[IrregularWord]  WITH CHECK ADD  CONSTRAINT [FK_IrregularWord_Vocabulary] FOREIGN KEY([Vocabulary])
REFERENCES [dbo].[Vocabulary] ([ID])
GO
ALTER TABLE [dbo].[IrregularWord] CHECK CONSTRAINT [FK_IrregularWord_Vocabulary]
GO
ALTER TABLE [dbo].[Media]  WITH CHECK ADD  CONSTRAINT [FK_Media_News] FOREIGN KEY([News])
REFERENCES [dbo].[News] ([ID])
GO
ALTER TABLE [dbo].[Media] CHECK CONSTRAINT [FK_Media_News]
GO
ALTER TABLE [dbo].[News]  WITH CHECK ADD  CONSTRAINT [FK_News_Users] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[Users] ([ID])
GO
ALTER TABLE [dbo].[News] CHECK CONSTRAINT [FK_News_Users]
GO
ALTER TABLE [dbo].[Sentences]  WITH CHECK ADD  CONSTRAINT [FK_Sentences_Topic] FOREIGN KEY([Topic])
REFERENCES [dbo].[Topic] ([ID])
GO
ALTER TABLE [dbo].[Sentences] CHECK CONSTRAINT [FK_Sentences_Topic]
GO
ALTER TABLE [dbo].[SEO]  WITH CHECK ADD  CONSTRAINT [FK_SEO_Category] FOREIGN KEY([Category])
REFERENCES [dbo].[Category] ([ID])
GO
ALTER TABLE [dbo].[SEO] CHECK CONSTRAINT [FK_SEO_Category]
GO
ALTER TABLE [dbo].[SEO]  WITH CHECK ADD  CONSTRAINT [FK_SEO_News] FOREIGN KEY([News])
REFERENCES [dbo].[News] ([ID])
GO
ALTER TABLE [dbo].[SEO] CHECK CONSTRAINT [FK_SEO_News]
GO
ALTER TABLE [dbo].[Vocabulary]  WITH CHECK ADD  CONSTRAINT [FK_Vocabulary_Topic] FOREIGN KEY([Topic])
REFERENCES [dbo].[Topic] ([ID])
GO
ALTER TABLE [dbo].[Vocabulary] CHECK CONSTRAINT [FK_Vocabulary_Topic]
GO
/****** Object:  StoredProcedure [dbo].[spp_Category_AddUpdate]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[spp_Category_AddUpdate]
	@ID INT,
	@Name nvarchar(500),
    @Type nvarchar(100),
    @Parent int,
    @Url nvarchar(500),
    @Order int,
    @IsShow bit,
    @IsDelete bit,
    @CreatedDate datetime,
    @CreatedBy int
AS
BEGIN
	IF(@ID = 0)
		BEGIN
			INSERT INTO [dbo].[Category]
           ([Name]
           ,[Type]
           ,[Parent]
           ,[Url]
           ,[Order]
           ,[IsShow]
           ,[IsDelete]
           ,[CreatedDate]
           ,[CreatedBy])
     VALUES
           (@Name,
			@Type,
			@Parent,
			@Url,
			@Order,
			@IsShow,
			@IsDelete,
			@CreatedDate,
			@CreatedBy)
		END

	ELSE
		BEGIN
			UPDATE [dbo].[Category]
			SET [Name] = @Name, 
				[Type] = @Type, 
				[Parent] = @Parent, 
				[Url] = @Url, 
				[Order] = @Order, 
				[IsShow] = @IsShow, 
				[IsDelete] = @IsDelete, 
				[CreatedDate] = @CreatedDate,
				[CreatedBy] = @CreatedBy
			WHERE ID = @ID
		END
END
GO
/****** Object:  StoredProcedure [dbo].[spp_Category_Delete]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[spp_Category_Delete]
	@ID INT
AS
BEGIN
	UPDATE Category SET IsDelete = 1 WHERE ID = @ID
END
GO
/****** Object:  StoredProcedure [dbo].[spp_Category_GetAll]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[spp_Category_GetAll] 
	
AS
BEGIN
	SELECT * FROM CategorySEO
	WHERE IsDelete = 0
END
GO
/****** Object:  StoredProcedure [dbo].[spp_Category_GetByID]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[spp_Category_GetByID]
	@ID INT
AS
BEGIN
	SELECT * FROM [CategorySeo]
	WHERE IsDelete = 0 AND ID = @ID
END
GO
/****** Object:  StoredProcedure [dbo].[spp_Comment_AddUpdate]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[spp_Comment_AddUpdate]
	@ID INT,
	@Content  nvarchar(max)  
    ,@CreatedDate  datetime  
    ,@CreatedBy  int  
    ,@News  int  
    ,@Parent  int  
    ,@IsDelete  bit  
    ,@IsShow  bit  
    ,@IsApproved  bit  
AS
BEGIN
	IF(@ID = 0)
		BEGIN
			INSERT INTO [dbo].[Comment]
           ([Content]
           ,[CreatedDate]
           ,[CreatedBy]
           ,[News]
           ,[Parent]
           ,[IsDelete]
           ,[IsShow]
           ,[IsApproved])
     VALUES
           (@Content   
           ,@CreatedDate    
           ,@CreatedBy    
           ,@News    
           ,@Parent    
           ,@IsDelete    
           ,@IsShow    
           ,@IsApproved)
		END

	ELSE
		BEGIN
			UPDATE [dbo].[Comment]
			SET [Content] = @Content
				,[CreatedDate] = @CreatedDate
				,[CreatedBy] = @CreatedBy
				,[News] = @News
				,[Parent] = @Parent
				,[IsDelete] = @IsDelete
				,[IsShow] = @IsShow
				,[IsApproved] = @IsApproved
			WHERE ID = @ID
		END
END
GO
/****** Object:  StoredProcedure [dbo].[spp_Comment_Delete]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[spp_Comment_Delete]
	@ID INT
AS
BEGIN
	UPDATE Comment SET IsDelete = 1 WHERE ID = @ID
END
GO
/****** Object:  StoredProcedure [dbo].[spp_Comment_GetAll]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[spp_Comment_GetAll] 
	
AS
BEGIN
	SELECT * FROM Comment
	WHERE IsDelete = 0
END
GO
/****** Object:  StoredProcedure [dbo].[spp_Comment_GetByID]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[spp_Comment_GetByID]
	@ID INT
AS
BEGIN
	SELECT * FROM Comment
	WHERE IsDelete = 0 AND ID = @ID
END
GO
/****** Object:  StoredProcedure [dbo].[spp_Media_AddUpdate]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[spp_Media_AddUpdate]
	@ID INT,
	@Image  nvarchar(max)
    ,@Type  nvarchar(50)
    ,@Video  nvarchar(max)
    ,@News  int
    ,@Quote  nvarchar(500)
    ,@Content  nvarchar(max)
    ,@Url  nvarchar(500)
    ,@IsShow  bit
    ,@IsDelete  bit
    ,@Audio  nvarchar(max)
AS
BEGIN
	IF(@ID = 0)
		BEGIN
			INSERT INTO [dbo].[Media]
           ([Image]
           ,[Type]
           ,[Video]
           ,[News]
           ,[Quote]
           ,[Content]
           ,[Url]
           ,[IsShow]
           ,[IsDelete]
           ,[Audio])
     VALUES
           (@Image  
           ,@Type  
           ,@Video  
           ,@News  
           ,@Quote  
           ,@Content  
           ,@Url  
           ,@IsShow  
           ,@IsDelete  
           ,@Audio)
		END

	ELSE
		BEGIN
			UPDATE [dbo].[Media]
			SET [Image] = @Image
				,[Type] = @Type
				,[Video] = @Video
				,[News] = @News
				,[Quote] = @Quote
				,[Content] = @Content
				,[Url] = @Url
				,[IsShow] = @IsShow
				,[IsDelete] = @IsDelete
				,[Audio] = @Audio
			WHERE ID = @ID
		END
END
GO
/****** Object:  StoredProcedure [dbo].[spp_Media_Delete]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[spp_Media_Delete]
	@ID INT
AS
BEGIN
	UPDATE Media SET IsDelete = 1 WHERE ID = @ID
END
GO
/****** Object:  StoredProcedure [dbo].[spp_Media_GetAll]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[spp_Media_GetAll] 
	
AS
BEGIN
	SELECT * FROM Media
	WHERE IsDelete = 0
END
GO
/****** Object:  StoredProcedure [dbo].[spp_Media_GetByID]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[spp_Media_GetByID]
	@ID INT
AS
BEGIN
	SELECT * FROM Media
	WHERE IsDelete = 0 AND ID = @ID
END
GO
/****** Object:  StoredProcedure [dbo].[spp_News_AddUpdate]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
create PROCEDURE [dbo].[spp_News_AddUpdate]
	@ID INT,
	@Title nvarchar(250) 
    ,@Introduction nvarchar(max) 
    ,@Content nvarchar(max) 
    ,@MainImg nvarchar(max) 
    ,@SubImg nvarchar(max) 
    ,@CreatedBy int 
    ,@Views int 
    ,@CreatedDate datetime 
    ,@IsPopular bit 
    ,@IsDelete bit 
    ,@IsShow bit 
    ,@IsApproved bit 
AS
BEGIN
	IF(@ID = 0)
		BEGIN
			INSERT INTO [dbo].[News]
           ([Title]
           ,[Introduction]
           ,[Content]
           ,[MainImg]
           ,[SubImg]
           ,[CreatedBy]
           ,[Views]
           ,[CreatedDate]
           ,[IsPopular]
           ,[IsDelete]
           ,[IsShow]
           ,[IsApproved])
     VALUES
           (@Title   
           ,@Introduction   
           ,@Content   
           ,@MainImg   
           ,@SubImg   
           ,@CreatedBy   
           ,@Views   
           ,@CreatedDate   
           ,@IsPopular   
           ,@IsDelete   
           ,@IsShow   
           ,@IsApproved   )
		END

	ELSE
		BEGIN
			UPDATE [dbo].[News]
			SET [Title] = @Title 
				,[Introduction] = @Introduction 
				,[Content] = @Content 
				,[MainImg] = @MainImg 
				,[SubImg] = @SubImg 
				,[CreatedBy] = @CreatedBy 
				,[Views] = @Views 
				,[CreatedDate] = @CreatedDate 
				,[IsPopular] = @IsPopular 
				,[IsDelete] = @IsDelete 
				,[IsShow] = @IsShow 
				,[IsApproved] = @IsApproved 
			WHERE ID = @ID
		END
END
GO
/****** Object:  StoredProcedure [dbo].[spp_News_Delete]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[spp_News_Delete]
	@ID INT
AS
BEGIN
	UPDATE News SET IsDelete = 1 WHERE ID = @ID
END
GO
/****** Object:  StoredProcedure [dbo].[spp_News_GetAll]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[spp_News_GetAll] 
	
AS
BEGIN
	SELECT * FROM NewsSeo
	WHERE IsDelete = 0
END
GO
/****** Object:  StoredProcedure [dbo].[spp_News_GetByID]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[spp_News_GetByID]
	@ID INT
AS
BEGIN
	SELECT * FROM NewsSeo
	WHERE IsDelete = 0 AND ID = @ID
END
GO
/****** Object:  StoredProcedure [dbo].[spp_SEO_AddUpdate]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[spp_SEO_AddUpdate]
	@ID INT,
	@Category  int
    ,@News  int
    ,@Url  nvarchar(500)
    ,@Description  nvarchar(max)
    ,@Title  nvarchar(500)
    ,@Keywords  nvarchar(500)
    ,@Tags  nvarchar(500)
    ,@H1  nvarchar(500)
    ,@H2  nvarchar(500)
    ,@H3  nvarchar(500)
    ,@H4  nvarchar(500)
    ,@H5  nvarchar(500)
    ,@H6  nvarchar(500)
AS
BEGIN
	IF(@ID = 0)
		BEGIN
			INSERT INTO [dbo].[SEO]
           ([Category]
           ,[News]
           ,[Url]
           ,[Description]
           ,[Title]
           ,[Keywords]
           ,[Tags]
           ,[H1]
           ,[H2]
           ,[H3]
           ,[H4]
           ,[H5]
           ,[H6])
     VALUES
           (@Category
           ,@News
           ,@Url
           ,@Description
           ,@Title
           ,@Keywords
           ,@Tags
           ,@H1
           ,@H2
           ,@H3
           ,@H4
           ,@H5
           ,@H6)
		END

	ELSE
		BEGIN
			UPDATE [dbo].[SEO]
			SET [Category] = @Category
				,[News] = @News
				,[Url] = @Url
				,[Description] = @Description
				,[Title] = @Title
				,[Keywords] = @Keywords
				,[Tags] = @Tags
				,[H1] = @H1
				,[H2] = @H2
				,[H3] = @H3
				,[H4] = @H4
				,[H5] = @H5
				,[H6] = @H6
			WHERE ID = @ID
		END
END
GO
/****** Object:  StoredProcedure [dbo].[spp_Users_AddUpdate]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[spp_Users_AddUpdate]
	@ID INT,
	@UserName  nvarchar(100)
    ,@Password  nvarchar(100)
    ,@Email  nvarchar(100)
    ,@Address  nvarchar(250)
    ,@Role  nvarchar(100)
    ,@Avatar  nvarchar(max)
    ,@IsActive  bit
    ,@IsDelete  bit
AS
BEGIN
	IF(@ID = 0)
		BEGIN
			INSERT INTO [dbo].[Users]
           ([UserName]
           ,[Password]
           ,[Email]
           ,[Address]
           ,[Role]
           ,[Avatar]
           ,[IsActive]
           ,[IsDelete])
     VALUES
           (@UserName  
           ,@Password  
           ,@Email  
           ,@Address  
           ,@Role  
           ,@Avatar  
           ,@IsActive  
           ,@IsDelete )
		END

	ELSE
		BEGIN
			UPDATE [dbo].[Users]
			SET [UserName] = @UserName
				,[Password] = @Password
				,[Email] = @Email
				,[Address] = @Address
				,[Role] = @Role
				,[Avatar] = @Avatar
				,[IsActive] = @IsActive
				,[IsDelete] = @IsDelete 
			WHERE ID = @ID
		END
END
GO
/****** Object:  StoredProcedure [dbo].[spp_Users_Delete]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[spp_Users_Delete]
	@ID INT
AS
BEGIN
	UPDATE Users SET IsDelete = 1 WHERE ID = @ID
END
GO
/****** Object:  StoredProcedure [dbo].[spp_Users_GetAll]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[spp_Users_GetAll] 
	
AS
BEGIN
	SELECT * FROM Users
	WHERE IsDelete = 0
END
GO
/****** Object:  StoredProcedure [dbo].[spp_Users_GetByID]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[spp_Users_GetByID]
	@ID INT
AS
BEGIN
	SELECT * FROM Users
	WHERE IsDelete = 0 AND ID = @ID
END
GO
/****** Object:  StoredProcedure [dbo].[spp_Webconfig_AddUpdate]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[spp_Webconfig_AddUpdate]
	@ID INT
	,@Facebook  nvarchar(max)  
    ,@Instagram  nvarchar(max)  
    ,@Twiter  nvarchar(max)  
    ,@GooglePlus  nvarchar(max)  
    ,@Phone  nvarchar(20)  
    ,@Mail  nvarchar(100)  
    ,@Fax  nvarchar(100)  
    ,@Office  nvarchar(50)  
    ,@Map  nvarchar(max)  
AS
BEGIN
	UPDATE [dbo].[Webconfig]
   SET [Facebook] = @Facebook
      ,[Instagram] = @Instagram
      ,[Twiter] = @Twiter
      ,[GooglePlus] = @GooglePlus
      ,[Phone] = @Phone
      ,[Mail] = @Mail
      ,[Fax] = @Fax
      ,[Office] = @Office
      ,[Map] = @Map
	  WHERE ID = @ID
END
GO
/****** Object:  StoredProcedure [dbo].[spp_Webconfig_GetAll]    Script Date: 3/3/2020 11:40:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[spp_Webconfig_GetAll]
	@ID INT
AS
BEGIN
	SELECT * FROM Webconfig
END
GO
